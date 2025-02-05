import { useEffect, useState } from 'react';
import { Users, LayoutDashboard, FileText } from 'lucide-react';
import { User, Post, SortField } from './types';
import { fetchUsers, fetchUserPosts } from './api';
import { UserCard } from './components/UserCard';
import { PostCard } from './components/PostCard';
import { SearchBar } from './components/SearchBar';
import { SortDropdown } from './components/SortDropdown';
import { Pagination } from './components/Pagination';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField>('name');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error loading users:', error);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      if (selectedUser) {
        try {
          const data = await fetchUserPosts(selectedUser.id);
          setPosts(data);
          setCurrentPage(1);
        } catch (error) {
          console.error('Error loading posts:', error);
        }
      } else {
        setPosts([]);
      }
    };
    loadPosts();
  }, [selectedUser]);

  useEffect(() => {
    let result = [...users];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        user => 
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortField === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortField === 'company') {
        return a.company.name.localeCompare(b.company.name);
      }
      return 0;
    });
    
    setFilteredUsers(result);
  }, [users, searchQuery, sortField]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Users & Posts Dashboard</h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Users</h2>
                </div>
                <SortDropdown value={sortField} onChange={setSortField} />
              </div>
              
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              
              <div className="space-y-3 mt-4 h-[500px] overflow-y-auto">
                {filteredUsers.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    isSelected={selectedUser?.id === user.id}
                    onClick={() => setSelectedUser(user)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 ">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    {selectedUser ? `Posts by ${selectedUser.name}` : 'Select a user to view their posts'}
                  </h2>
                </div>
                {selectedUser && posts.length > 0 && (
                  <span className="text-sm text-gray-500">
                    {posts.length} posts
                  </span>
                )}
              </div>
              
              {selectedUser ? (
                <>
                  <div className="space-y-3 ">
                    {currentPosts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                  {posts.length > postsPerPage && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p>Select a user from the list to view their posts</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;