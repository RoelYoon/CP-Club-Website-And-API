from baekjoon import solvedac
import antiBotDetection
import sys
action = sys.argv[1]
user = sys.argv[2]
if action == "get_tier":
    print(solvedac.get_tier(user,**antiBotDetection.protectionArgs))
elif action == "get_ac_rating":
    print(solvedac.get_ac_rating(user,**antiBotDetection.protectionArgs))
elif action == "get_exp":
    print(solvedac.get_exp(user,**antiBotDetection.protectionArgs))
elif action == "get_rank":
    print(solvedac.get_rank(user,**antiBotDetection.protectionArgs))
sys.__stdout__.flush()