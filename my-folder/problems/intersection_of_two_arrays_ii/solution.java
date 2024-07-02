class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> obj1 = new HashMap<>();
        List<Integer> res = new ArrayList<>();

        for (int num : nums1) {
            obj1.put(num, obj1.getOrDefault(num, 0) + 1);
        }

        for (int num : nums2) {
            if (obj1.containsKey(num)) {
                res.add(num);
                obj1.put(num, obj1.get(num) - 1);
                if (obj1.get(num) == 0) {
                    obj1.remove(num);
                }
            }
        }

        int[] result = new int[res.size()];
        for (int i = 0; i < res.size(); i++) {
            result[i] = res.get(i);
        }
        return result;
    }
}