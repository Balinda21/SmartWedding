import { ReactNode } from "react";
import { Heart, Gem } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center p-4">
      {/* Decorative Elements */}
      <div className="fixed top-10 left-10 text-pink-300 animate-pulse">
        <Heart size={32} />
      </div>
      <div className="fixed bottom-10 right-10 text-pink-300 animate-pulse">
        <Gem size={32} />
      </div>

      {/* Auth Container */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30l15-15M30 30l15 15M30 30l-15 15M30 30l-15-15' stroke='%23EC4899' stroke-width='2'/%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-great-vibes text-gray-800 mb-2">
                {title}
              </h2>
              <p className="text-gray-500">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
