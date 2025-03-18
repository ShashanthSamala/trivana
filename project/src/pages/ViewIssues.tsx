import React, { useState } from 'react';
import { MapPin, Calendar, User, Filter, Search } from 'lucide-react';

interface Issue {
  id: string;
  title: string;
  description: string;
  location: string;
  username: string;
  category: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  createdAt: string;
}

const MOCK_ISSUES: Issue[] = [
  {
    id: '1',
    title: 'Illegal Dumping in River Valley',
    description: 'Multiple instances of waste dumping observed near the river bank. This poses a serious threat to local wildlife and water quality.',
    location: 'River Valley Park',
    username: 'EcoWatcher',
    category: 'Water Pollution',
    status: 'Pending',
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    title: 'Deforestation Activity',
    description: 'Unauthorized tree cutting activity spotted in protected forest area. Several mature trees have been marked for removal.',
    location: 'Green Forest Reserve',
    username: 'ForestGuardian',
    category: 'Deforestation',
    status: 'In Progress',
    createdAt: '2024-03-14'
  },
  {
    id: '3',
    title: 'Air Quality Concerns',
    description: 'Strong chemical smell and visible emissions from industrial facility during non-working hours.',
    location: 'Industrial District',
    username: 'CleanAirAdvocate',
    category: 'Air Pollution',
    status: 'Pending',
    createdAt: '2024-03-13'
  }
];

const CATEGORIES = ['All Categories', 'Water Pollution', 'Air Pollution', 'Deforestation', 'Waste Management', 'Wildlife Protection'];
const LOCATIONS = ['All Locations', 'River Valley Park', 'Green Forest Reserve', 'Industrial District', 'City Center', 'Coastal Area'];

const ViewIssues = () => {
  const [issues, setIssues] = useState<Issue[]>(MOCK_ISSUES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || issue.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All Locations' || issue.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const getStatusColor = (status: Issue['status']) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Environmental Issues</h1>
            <p className="text-gray-600">
              Track and monitor reported sustainability issues in your community
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-sm text-gray-500">
              Showing {filteredIssues.length} issues
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white"
            >
              {CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white"
            >
              {LOCATIONS.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredIssues.map(issue => (
            <div
              key={issue.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{issue.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(issue.status)}`}>
                  {issue.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{issue.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{issue.location}</span>
                </div>
                
                <div className="flex items-center text-gray-500">
                  <User className="h-4 w-4 mr-2" />
                  <span className="text-sm">{issue.username}</span>
                </div>
                
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{issue.createdAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredIssues.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No issues found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewIssues;