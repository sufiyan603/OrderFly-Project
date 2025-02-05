import { Post } from '../types';
import { FileText } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-4 h-4 text-green-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 capitalize">{post.title}</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">{post.body}</p>
        </div>
      </div>
    </div>
  );
}