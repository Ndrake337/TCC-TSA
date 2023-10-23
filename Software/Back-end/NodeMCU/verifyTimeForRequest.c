#include <stdio.h>
#include <time.h>

int main() {
  while (1) {
    time_t t = time(NULL);
    struct tm tm = *localtime(&t);
    printf("now: %d-%02d-%02d %02d:%02d:%02d\n", tm.tm_year + 1900,
           tm.tm_mon + 1, tm.tm_mday, tm.tm_hour, tm.tm_min, tm.tm_sec);

    if (tm.tm_min == 30 || tm.tm_min == 00) {
      printf("HTTP Request!\n");
    }
		sleep(60-tm.tm_sec);
  }
}