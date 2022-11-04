#include <stdio.h>
#include <unistd.h>

int main(int argc, char *argv[])
{
    int a = fork() && fork() || fork();

    printf("%d\n", a);
}