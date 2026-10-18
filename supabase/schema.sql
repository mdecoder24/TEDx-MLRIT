-- Run in the Supabase SQL editor of a fresh project.
-- Public (anon) visitors can only INSERT; reading submissions requires the dashboard / service role.

create table public.registrations (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  college text,
  year text,
  department text,
  section text,
  "rollNumber" text,
  screenshot text not null
);

create table public.speakers (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  nominee text,
  talk_title text,
  idea_brief text,
  idea_worth text,
  bio text,
  link text,
  consent text
);

create table public.sponsors (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  company text,
  link text,
  sponsorship text,
  support text,
  brand text,
  follow_up text
);

alter table public.registrations enable row level security;
alter table public.speakers enable row level security;
alter table public.sponsors enable row level security;

create policy "anon can register" on public.registrations for insert to anon with check (true);
create policy "anon can apply as speaker" on public.speakers for insert to anon with check (true);
create policy "anon can apply as sponsor" on public.sponsors for insert to anon with check (true);

-- Private bucket for payment screenshots: anon may upload, never list or read.
insert into storage.buckets (id, name, public) values ('payment-screenshots', 'payment-screenshots', false);

create policy "anon can upload payment screenshots" on storage.objects
  for insert to anon with check (bucket_id = 'payment-screenshots');
