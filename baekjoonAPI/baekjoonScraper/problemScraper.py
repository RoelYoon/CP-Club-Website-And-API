from baekjoon import problem
import antiBotDetection
import sys
action = sys.argv[1]
id = sys.argv[2]
if action == "get_question":
    print(problem.get_question(id,**antiBotDetection.protectionArgs))
elif action == "get_input":
    print(problem.get_input(id,**antiBotDetection.protectionArgs))
elif action == "get_output":
    print(problem.get_output(id,**antiBotDetection.protectionArgs))
elif action == "get_sample_input":
    print(problem.get_sample_input(id,**antiBotDetection.protectionArgs))
elif action == "get_sample_output":
    print(problem.get_sample_output(id,**antiBotDetection.protectionArgs))
elif action == "get_correct_rate":
    print(problem.get_correct_rate(id,**antiBotDetection.protectionArgs))
elif action == "get_time_limit":
    print(problem.get_time_limit(id,**antiBotDetection.protectionArgs))
elif action == "get_memory_limit":
    print(problem.get_memory_limit(id,**antiBotDetection.protectionArgs))
elif action == "get_random_question":
    print(problem.get_random_question())
sys.__stdout__.flush()