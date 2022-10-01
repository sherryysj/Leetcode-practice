public class Solution {
    public int RomanToInt(string s) {
        int num = 0;
        Dictionary<char, int> dict = new Dictionary<char, int>() {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };
        for (int index = 0; index < s.Length; index++) {
            if (index < s.Length - 1 && dict[s[index]] < dict[s[index + 1]]) {
                num += dict[s[index + 1]] - dict[s[index]];
                index += 1;
            } else {
                num += dict[s[index]];
            }
        }
        return num;
    }
}