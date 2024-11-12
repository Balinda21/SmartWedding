
const DashboardLoading = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Stats Loading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
      </div>

      {/* Charts Loading */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-80 bg-gray-100 rounded"></div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-80 bg-gray-100 rounded"></div>
        </div>
      </div>

      {/* Table Loading */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="p-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex space-x-4 mb-4">
              <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
              <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
              <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLoading;
