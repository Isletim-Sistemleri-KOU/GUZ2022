#include "stdio.h"
#include "unistd.h"

int main()
{

    pid_t pid1, pid2, pid3;
    pid1 = 0;
    pid2 = 0;
    pid3 = 0;

    pid1 = fork();
    wait(NULL);
    if (pid1 == 0)
    {
        pid2 = fork();
        wait(NULL);
        pid3 = fork();
        wait(NULL);
    }

    else
    {
        pid3 = fork();
        wait(NULL);

        if (pid3 == 0)
        {
            pid2 = fork();
            wait(NULL);
        }
    }

    if ((pid1 == 0) && (pid2 == 0))
        printf("L1\n");

    if (pid1 != 0)
        printf("L2\n");

    if (pid2 != 0)
        printf("L3\n");

    if (pid3 != 0)
        printf("L4\n");

    return 0;
}