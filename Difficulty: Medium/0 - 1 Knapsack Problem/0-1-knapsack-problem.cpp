//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {
  public:
    // Function to return max value that can be put in knapsack of capacity.
    int f(int capacity, vector<int>& val, vector<int>& wt, int index) {
        if (index >= val.size() || capacity < 0) return 0;
        
        int include = 0;
        if (capacity - wt[index] >= 0)
            include = val[index] + f(capacity - wt[index], val, wt, index + 1);
        int exclude = f(capacity, val, wt, index + 1);
        return max(include, exclude);
    }
    
    int knapSack(int capacity, vector<int> &val, vector<int> &wt) {
        int ans = f(capacity, val, wt, 0);
        return ans;
    }
};


//{ Driver Code Starts.

int main() {
    // Taking total test cases
    int testCases;
    cin >> testCases;
    cin.ignore();
    while (testCases--) {
        // Reading number of items and capacity
        int numberOfItems, capacity;
        vector<int> weights, values;
        string input;
        int number;

        // Read capacity and number of items
        getline(cin, input);
        stringstream ss(input);
        ss >> capacity;      // The first number is the capacity
        ss >> numberOfItems; // The second number is the number of items

        // Read values
        getline(cin, input);
        ss.clear();
        ss.str(input);
        while (ss >> number) {
            values.push_back(number);
        }

        // Read weights
        getline(cin, input);
        ss.clear();
        ss.str(input);
        while (ss >> number) {
            weights.push_back(number);
        }

        Solution solution;
        cout << solution.knapSack(capacity, values, weights) << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends