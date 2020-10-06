#include <stdio.h>
#include <stdint.h>

uint32_t breaking_chocolate(uint32_t n, uint32_t m)
{
	uint32_t breaks;

	breaks = 0;
	if (n >= 1 && m >= 1)
		breaks = (n * m) - 1;
	return (breaks);
}

int main(void)
{
	printf("%d\n", breaking_chocolate(5, 5));
	return (0);
}
