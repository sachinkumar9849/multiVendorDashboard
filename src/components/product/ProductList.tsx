"use client";
import React, { useState, useMemo } from 'react';
import { Search, Plus, Download, AlertCircle, Eye, Edit, Trash2, BarChart3 } from 'lucide-react';
import { Switch } from '../ui/switch';

interface Product {
    id: number;
    name: string;
    type: 'Digital' | 'Physical';
    price: number;
    verifyStatus: 'Approved' | 'Pending' | 'Rejected';
    activeStatus: boolean;
    brand: string;
    category: string;
    subCategory: string;
    subSubCategory: string;
}

const ProductList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('All brand');
    const [selectedCategory, setSelectedCategory] = useState('Select category');
    const [selectedSubCategory, setSelectedSubCategory] = useState('Select Sub Category');
    const [selectedSubSubCategory, setSelectedSubSubCategory] = useState('Select Sub Sub Category');

    // Sample data based on your image
    const products: Product[] = [
        {
            id: 1,
            name: 'Norton Utilities Ultimate',
            type: 'Digital',
            price: 40.00,
            verifyStatus: 'Approved',
            activeStatus: true,
            brand: 'Norton',
            category: 'Electronics & Gadgets',
            subCategory: 'Software',
            subSubCategory: 'Security'
        },
        {
            id: 2,
            name: 'Office 2021 Professional',
            type: 'Digital',
            price: 150.00,
            verifyStatus: 'Approved',
            activeStatus: true,
            brand: 'Microsoft',
            category: 'Electronics & Gadgets',
            subCategory: 'Software',
            subSubCategory: 'Productivity'
        },
        {
            id: 3,
            name: '125 Childrens AudioBooks',
            type: 'Digital',
            price: 50.00,
            verifyStatus: 'Approved',
            activeStatus: true,
            brand: 'AudioPress',
            category: 'Books & Stationery',
            subCategory: 'AudioBooks',
            subSubCategory: 'Children'
        },
        {
            id: 4,
            name: 'Kill Code Fiction',
            type: 'Physical',
            price: 16.00,
            verifyStatus: 'Approved',
            activeStatus: true,
            brand: 'BookPress',
            category: 'Books & Stationery',
            subCategory: 'Fiction',
            subSubCategory: 'Thriller'
        }
    ];

    const brands = ['All brand', 'Norton', 'Microsoft', 'AudioPress', 'BookPress', 'Francisco Electrical', 'Timmerman', 'Borcelle ElectricVehicle'];

    const categories = [
        'Select category',
        "Men's Fashion",
        "Women's Fashion",
        "Kid's Fashion",
        'Health & Beauty',
        'Pet Supplies',
        'Home & Kitchen',
        'Baby & Toddler',
        'Sports & Outdoor',
        'Phone & Gadgets',
        'Electronics & Gadgets',
        'Travel & Luggage',
        'Books & Stationery',
        'Groceries & Dailies',
        'Musical Instruments',
        'Gifts & Crafts',
        'Automotive',
        'Digital Products'
    ];

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBrand = selectedBrand === 'All brand' || product.brand === selectedBrand;
            const matchesCategory = selectedCategory === 'Select category' || product.category === selectedCategory;

            return matchesSearch && matchesBrand && matchesCategory;
        });
    }, [searchTerm, selectedBrand, selectedCategory, products]);

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedBrand('All brand');
        setSelectedCategory('Select category');
        setSelectedSubCategory('Select Sub Category');
        setSelectedSubSubCategory('Select Sub Sub Category');
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Approved':
                return 'text-green-600 bg-green-50 border-green-200';
            case 'Pending':
                return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'Rejected':
                return 'text-red-600 bg-red-50 border-red-200';
            default:
                return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    return (
        <div className="">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 ">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">Product List</h1>
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm font-medium">
                            {filteredProducts.length}
                        </span>
                    </div>

                    {/* Filter Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Products</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {/* Brand Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                                <select
                                    value={selectedBrand}
                                    onChange={(e) => setSelectedBrand(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {brands.map(brand => (
                                        <option key={brand} value={brand}>{brand}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sub Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sub Category</label>
                                <select
                                    value={selectedSubCategory}
                                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Select Sub Category">Select Sub Category</option>
                                    <option value="Software">Software</option>
                                    <option value="AudioBooks">AudioBooks</option>
                                    <option value="Fiction">Fiction</option>
                                </select>
                            </div>

                            {/* Sub Sub Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sub Sub Category</label>
                                <select
                                    value={selectedSubSubCategory}
                                    onChange={(e) => setSelectedSubSubCategory(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Select Sub Sub Category">Select Sub Sub Category</option>
                                    <option value="Security">Security</option>
                                    <option value="Productivity">Productivity</option>
                                    <option value="Children">Children</option>
                                    <option value="Thriller">Thriller</option>
                                </select>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={resetFilters}
                                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                            >
                                Reset
                            </button>
                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                Show data
                            </button>
                        </div>
                    </div>

                    {/* Search and Actions */}

                </div>
                {/* bg-white rounded-xl shadow-sm border border-gray-200 */}
                {/* Product Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className=" flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-6">
                        <div className="flex gap-2 flex-1 max-w-md">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search by Product Name"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                Search
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                                <Download className="w-4 h-4" />
                                Export
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors">
                                <AlertCircle className="w-4 h-4" />
                                Limited Stocks
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                <Plus className="w-4 h-4" />
                                Add new product
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">SL</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product Name</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product Type</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Unit Price</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Verify Status</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Active Status</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredProducts.map((product, index) => (
                                        <tr key={product.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                                                        <img src="https://sb.kaleidousercontent.com/67418/1920x1100/0135fd63fd/transparent-boots.png" alt="" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900">{product.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{product.type}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">${product.price.toFixed(2)}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(product.verifyStatus)}`}>
                                                    {product.verifyStatus}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    {/* <button
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${product.activeStatus ? 'bg-blue-600' : 'bg-gray-200'
                                                            }`}
                                                    >
                                                        <span
                                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${product.activeStatus ? 'translate-x-6' : 'translate-x-1'
                                                                }`}
                                                        />
                                                    </button> */}
                                                    <Switch/>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                  
                                                    <button className="p-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors">
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No products found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;