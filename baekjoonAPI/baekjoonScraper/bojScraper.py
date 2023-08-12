from baekjoon import boj
import antiBotDetection
import sys
action = sys.argv[1]
user = sys.argv[2]
if action == "get_rank":
    print(boj.get_rank(user,**antiBotDetection.protectionArgs))
elif action == "get_correct_qs":
    print(boj.get_correct_qs(user,**antiBotDetection.protectionArgs))
elif action == "get_correct_q":
    print(boj.get_correct_q(user,**antiBotDetection.protectionArgs))
elif action == "get_unsolved_qs":
    print(boj.get_unsolved_qs(user,**antiBotDetection.protectionArgs))
elif action == "get_unsolved_q":
    print(boj.get_unsolved_q(user,**antiBotDetection.protectionArgs))
elif action == "get_submissions":
    print(boj.get_submissions(user,**antiBotDetection.protectionArgs))
sys.__stdout__.flush()