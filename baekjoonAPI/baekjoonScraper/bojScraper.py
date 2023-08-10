from baekjoon import boj
import antiBotDetection
import sys
action = sys.argv[1]
user = sys.argv[2]
if action == "get_status_message":
    print(boj.get_status_message(user,**antiBotDetection.protectionArgs))
elif action == "get_rank":
    print(boj.get_rank(user,**antiBotDetection.protectionArgs))
elif action == "get_correct_qs":
    print(boj.get_correct_qs(user,**antiBotDetection.protectionArgs))
elif action == "get_correct_q":
    print(boj.get_correct_q(user,**antiBotDetection.protectionArgs))
elif action == "get_unsolved_qs":
    print(boj.get_unsolved_qs(user,**antiBotDetection.protectionArgs))
elif action == "get_unsolved_q":
    print(boj.get_unsolved_q(user,**antiBotDetection.protectionArgs))
elif action == "get_submit_time":
    print(boj.get_submit_time(user,**antiBotDetection.protectionArgs))
sys.__stdout__.flush()