import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Building,
  Users,
  Calendar,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const monthlyBookings = [
  { name: "Jan", bookings: 65 },
  { name: "Feb", bookings: 85 },
  { name: "Mar", bookings: 75 },
  { name: "Apr", bookings: 95 },
  { name: "May", bookings: 120 },
  { name: "Jun", bookings: 110 },
];

const venueStats = [
  { name: "Hotels", value: 35 },
  { name: "Gardens", value: 25 },
  { name: "Beaches", value: 20 },
  { name: "Halls", value: 20 },
];

const COLORS = ["#EC4899", "#8B5CF6", "#3B82F6", "#10B981"];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-semibold mt-2">$45,231</p>
              <div className="flex items-center mt-2 text-green-500">
                <ArrowUpRight size={20} />
                <span className="text-sm font-medium">+12.5%</span>
              </div>
            </div>
            <div className="p-3 bg-pink-50 rounded-lg">
              <DollarSign className="text-pink-500" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-2xl font-semibold mt-2">1,245</p>
              <div className="flex items-center mt-2 text-green-500">
                <ArrowUpRight size={20} />
                <span className="text-sm font-medium">+8.2%</span>
              </div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Calendar className="text-purple-500" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Active Venues</p>
              <p className="text-2xl font-semibold mt-2">84</p>
              <div className="flex items-center mt-2 text-green-500">
                <ArrowUpRight size={20} />
                <span className="text-sm font-medium">+4.3%</span>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Building className="text-blue-500" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-semibold mt-2">2.4k</p>
              <div className="flex items-center mt-2 text-red-500">
                <ArrowDownRight size={20} />
                <span className="text-sm font-medium">-2.1%</span>
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Users className="text-green-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Bookings Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Monthly Bookings</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyBookings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#EC4899"
                  strokeWidth={2}
                  dot={{ fill: "#EC4899" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Venue Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Venue Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={venueStats}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {venueStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {venueStats.map((venue, index) => (
                <div key={venue.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm text-gray-600">{venue.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Recent Bookings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((booking) => (
                <tr key={booking} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <Building size={20} className="text-gray-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          Royal Garden
                        </p>
                        <p className="text-sm text-gray-500">
                          #ID-{booking}234
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">john@example.com</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    2024-02-{booking + 10}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    $1,{booking}00.00
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${
                        booking % 3 === 0
                          ? "bg-yellow-100 text-yellow-800"
                          : booking % 3 === 1
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    `}
                    >
                      {booking % 3 === 0
                        ? "Pending"
                        : booking % 3 === 1
                        ? "Confirmed"
                        : "Cancelled"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
