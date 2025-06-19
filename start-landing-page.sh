#!/bin/bash

# Script to setup and run the FinLayer landing page

echo "🏦 Setting up FinLayer Landing Page..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install npm."
    exit 1
fi

# Navigate to the landing page directory
cd "$(dirname "$0")"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Start the development server
echo "🚀 Starting development server..."
npm start
