#include <algorithm>
#include <cmath>
#include <complex>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <iostream>
using namespace std;

struct FFT {
  public:
  static const int BIT = 4;
  static const int BASE = (int)1e4;
  static const long double PI;

  private:
  template <class T>
  static void rader(complex<T>* F, int N) {
    int n = N >> 1, bit = 1, tib = n, arg;
    for (; bit < N; ++bit, tib ^= arg) {
      if (bit < tib) swap(F[bit], F[tib]);
      for (arg = n; arg & tib; arg >>= 1) tib ^= arg;
    }
  }

  template <class T>
  static void transform(complex<T>* F, int N, int rev) {
    rader(F, N);
    for (int h = 2; h <= N; h <<= 1) {
      const complex<T> wn(cos(rev * 2 * PI / h), sin(rev * 2 * PI / h));
      int H = h >> 1;
      for (int i = 0; i < N; i += h) {
        complex<T> w(1, 0);
        int j = i, k = i + H;
        for (; j < k; ++j) {
          complex<T> u = F[j];
          complex<T> v = w * F[j + H];
          F[j] = u + v;
          F[j + H] = u - v;
          w = w * wn;
        }
      }
    }
  }

  public:
  template <class T>
  static void dft(complex<T>* F, int N) {
    transform(F, N, 1);
  }
  template <class T>
  static void idft(complex<T>* F, int N) {
    transform(F, N, -1);
  }
  template <class T>
  static int convert(complex<T>* F, char* s) {
    int len = strlen(s), rlen = len;
    for (; len >= BIT; len -= BIT) {
      int arg = 0;
      for (int i = len - BIT; i < len; ++i) arg = arg * 10 + s[i] - '0';
      *F++ = complex<T>(arg, 0);
    }
    if (len) {
      int arg = 0;
      for (int i = 0; i < len; ++i) arg = arg * 10 + s[i] - '0';
      *F++ = complex<T>(arg, 0);
    }
    return rlen;
  }
};

const long double FFT::PI = acos(-1.0);

typedef unsigned __int64 LL;
const int MAXN = 1 << 20;
const int MAXS = (int)1e6 + 10;
int T_T, N, ans[MAXN];
char in[MAXS];
complex<long double> F[2][MAXN];

void work() {
  scanf("%d", &T_T);
  while (T_T--) {
    memset(F, 0, sizeof F);
    scanf("%s", in);
    N = FFT::convert(F[0], in);
    scanf("%s", in);
    N = max(N, FFT::convert(F[1], in));
    int len = (N - 1) / FFT::BIT + 1;
    for (N = 1; N < len; N <<= 1)
      ;
    N <<= 1;

    FFT::dft(F[0], N);
    FFT::dft(F[1], N);
    for (int i = 0; i < N; ++i) F[0][i] *= F[1][i];
    FFT::idft(F[0], N);
    for (int i = 0; i < N; ++i) F[0][i] /= complex<long double>(N, 0);
    for (int i = 0; i < N; ++i) {
      LL arg = (LL)round(F[0][i].real());
      ans[i] = arg % FFT::BASE;
      F[0][i + 1] += complex<long double>(arg / FFT::BASE, 0);
    }

    while (N > 1 && !ans[N - 1]) --N;
    printf("%d", ans[--N]);
    while (N >= 1) printf("%04d", ans[--N]);
    putchar('\n');
  }
}

int main() {
  work();
  return 0;
}
