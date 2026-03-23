-- Quartum Games demo/contact requests table
create extension if not exists pgcrypto;

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  organization text,
  role text,
  interest text,
  phone text,
  message text not null,
  source_page text,
  created_at timestamptz not null default now()
);

create index if not exists demo_requests_created_at_idx
  on public.demo_requests (created_at desc);
