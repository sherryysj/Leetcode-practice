class Solution {
    public int romanToInt(String s) {
        int num = 0;
        HashMap<Character, Integer> dict = new HashMap<Character, Integer>() {{
            put('I', 1);
            put('V', 5);
            put('X', 10);
            put('L', 50);
            put('C', 100);
            put('D', 500);
            put('M', 1000);
        }};
        for (int index = 0; index < s.length(); index++) {
            if (index < s.length() - 1 && dict.get(s.charAt(index)) < dict.get(s.charAt(index + 1)) ) {
                num += dict.get(s.charAt(index + 1)) - dict.get(s.charAt(index));
                index += 1;
            } else {
                num += dict.get(s.charAt(index));
            }
        }
        return num;
    }
}