#include <bits/stdc++.h>
using namespace std;

typedef long long LL;
LL A, B, C;

LL gcd(LL A, LL B) {
  return B ? gcd(B, A % B) : A;
}

LL egcd(LL A, LL& X, LL B, LL& Y, LL& G) {
  if (!B) {
    G = A;
    X = 1;
    Y = 0;
  } else {
    egcd(B, Y, A % B, X, G);
    Y -= X * (A / B);
  }
}

LL inv(LL A, LL M) {
  LL X, Y, G;
  egcd(A, X, M, Y, G);
  return G == 1 ? (X + M) % M : -1;
}

LL powerMod(LL X, LL Y, LL C) {
  LL ans = 1;
  for (; Y > 0; Y >>= 1, X = X * X % C)
    if (Y & 1) ans = ans * X % C;
  return ans;
}

unordered_map<LL, int> emp;
int ebsgs(LL A, LL B, LL C) {
  LL G, D = 1, cnt = 0;
  while ((G = gcd(A, C)) != 1) {
    if (B % G) return -1;
    B /= G;
    C /= G;
    D = D * A / G % C;
    ++cnt;
    if (D == B) return cnt;
  }

  emp.clear();
  LL M = ceil(sqrt(1.0 * C));
  LL AA = 1;
  for (int i = 0; i < M; ++i) {
    if (!emp.count(AA)) emp[AA] = i;
    AA = AA * A % C;
  }
  B = B * inv(D, C) % C;
  LL Am = inv(powerMod(A, M, C), C);
  for (int i = 0; i < M; ++i) {
    if (emp.count(B)) return emp[B] + cnt + i * M;
    B = B * Am % C;
  }
  return -1;
}

int main() {
  while (scanf("%lld%lld%lld", &A, &C, &B) == 3 && A && B && C) {
    int ans = ebsgs(A, B, C);
    if (~ans)
      printf("%d\n", ans);
    else
      puts("No Solution");
  }
  return 0;
}
