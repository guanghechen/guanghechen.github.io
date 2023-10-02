#pragma comment(linker, "/STACK:102400000,102400000")
#include <algorithm>
#include <cstdio>
#include <cstring>
#include <iostream>
#define lc (o << 1)
#define rc (o << 1 | 1)
using namespace std;

typedef long long LL;
const int MAXN = 100000 + 10;
const int MAXN2 = (1 << 17) + 10;

int N, Q;
int father[MAXN], dep[MAXN], son[MAXN], pos[MAXN], top[MAXN], dfsCnt;
LL V[MAXN2 << 1], T[MAXN2 << 1], S[MAXN2 << 1], ans[MAXN];

// 复用空间
LL *from = V, *to = T, *nxt = S, *siz = ans;

int ul, ur, uc;
LL uv;

void pushdown(int o, int lft, int rht) {
  LL d = T[o];
  if (d == 0) return;

  T[o] = 0;
  S[o] += V[o] * d;
  if (lft < rht) {
    T[lc] += d;
    T[rc] += d;
  }
}

// 执行操作一
void update1(int o, int lft, int rht) {
  pushdown(o, lft, rht);

  if (ul <= lft && rht <= ur) {
    V[o] += uv;
    return;
  }

  int mid = (lft + rht) >> 1;
  if (ul <= mid) update1(lc, lft, mid);
  if (ur > mid) update1(rc, mid + 1, rht);
}

// 执行操作二
void update2(int o, int lft, int rht, LL acc) {
  if (ul <= lft && rht <= ur) {
    T[o] += uv;
    S[o] += acc;
    return;
  }

  acc += V[o] * uv;
  pushdown(o, lft, rht);
  int mid = (lft + rht) >> 1;
  if (ul <= mid) update2(lc, lft, mid, acc);
  if (ur > mid) update2(rc, mid + 1, rht, acc);
}

void query(int o, int lft, int rht) {
  if (lft == rht)
    ans[lft] = S[o] + V[o] * T[o];
  else {
    pushdown(o, lft, rht);
    S[lc] += S[o];
    S[rc] += S[o];
    int mid = lft + rht >> 1;
    query(lc, lft, mid);
    query(rc, mid + 1, rht);
  }
}

void dfs(int o) {
  for (int u = from[o]; u; u = nxt[u]) {
    int v = to[u];
    dep[v] = dep[o] + 1;
    dfs(v);
    siz[o] += siz[v];
    if (siz[son[o]] < siz[v]) son[o] = v;
  }
}

void dfs(int o, int cur) {
  pos[o] = ++dfsCnt;
  top[o] = cur;
  if (son[o]) dfs(son[o], cur);
  for (int u = from[o]; u; u = nxt[u]) {
    int v = to[u];
    if (v != son[o]) dfs(v, v);
  }
}

void update(int L, int R) {
  while (top[L] != top[R]) {
    if (dep[top[L]] < dep[top[R]]) swap(L, R);
    ul = pos[top[L]];
    ur = pos[L];
    L = father[top[L]];

    if (uc == 1)
      update1(1, 1, N);
    else
      update2(1, 1, N, 0LL);
  }

  if (dep[L] > dep[R]) swap(L, R);
  ul = pos[L];
  ur = pos[R];

  if (uc == 1)
    update1(1, 1, N);
  else
    update2(1, 1, N, 0LL);
}

int main() {
  scanf("%d", &N);
  for (int i = 2, edgeCnt = 0, u; i <= N; ++i) {
    scanf("%d", &u);
    father[i] = u;
    to[++edgeCnt] = i;
    nxt[edgeCnt] = from[u];
    from[u] = edgeCnt;
  }

  for (int i = 1; i <= N; ++i) siz[i] = 1;

  dfs(1);
  dfs(1, 1);
  scanf("%d", &Q);

  // 需要清零
  memset(from, 0, (N + 1) * sizeof(LL));
  memset(to, 0, (N + 1) * sizeof(LL));
  memset(nxt, 0, (N + 1) * sizeof(LL));

  ul = 1;
  while (Q--) {
    scanf("%d%d%I64d", &uc, &ur, &uv);
    update(ul, ur);
  }
  query(1, 1, N);
  for (int i = 1; i <= N; ++i) printf("%I64d\n", ans[pos[i]]);
  return 0;
}
