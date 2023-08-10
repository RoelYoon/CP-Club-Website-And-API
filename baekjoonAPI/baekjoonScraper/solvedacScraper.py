from baekjoon import solvedac
import antiBotDetection
import sys
action = sys.argv[1]
if(action == "download"):
    url = sys.argv[2]
    file_name = sys.argv[3]
    print(solvedac.download(url,file_name,**antiBotDetection.protectionArgs))
else:
    user = sys.argv[2]
    if action == "get_tier":
        print(solvedac.get_tier(user,**antiBotDetection.protectionArgs))
    elif action == "get_ac_rating":
        print(solvedac.get_ac_rating(user,**antiBotDetection.protectionArgs))
    elif action == "get_exp":
        print(solvedac.get_exp(user,**antiBotDetection.protectionArgs))
    elif action == "get_rank":
        print(solvedac.get_rank(user,**antiBotDetection.protectionArgs))
    elif action == "get_rival_amount":
        print(solvedac.get_rival_amount(user,**antiBotDetection.protectionArgs))
sys.__stdout__.flush()