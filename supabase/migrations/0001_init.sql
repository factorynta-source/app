-- profiles
create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  role text default 'artist',
  full_name text,
  artist_name text,
  phone text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- releases
create table if not exists releases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  type text,
  title text not null,
  status text default 'draft',
  release_date date,
  label text default 'NTA FACTORY',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- tracks
create table if not exists tracks (
  id uuid primary key default gen_random_uuid(),
  release_id uuid not null references releases(id) on delete cascade,
  track_no int,
  title text not null,
  explicit boolean default false,
  isrc text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- assets
create table if not exists assets (
  id uuid primary key default gen_random_uuid(),
  release_id uuid references releases(id) on delete cascade,
  track_id uuid references tracks(id) on delete cascade,
  kind text not null,
  storage_path text not null,
  mime text,
  bytes bigint,
  created_at timestamptz default now()
);

-- indexes
create index if not exists idx_releases_user on releases(user_id);
create index if not exists idx_tracks_release on tracks(release_id);
create index if not exists idx_assets_release on assets(release_id);
create index if not exists idx_assets_track on assets(track_id);

-- updated_at triggers
create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_profiles_updated before update on profiles
for each row execute procedure set_updated_at();

create trigger trg_releases_updated before update on releases
for each row execute procedure set_updated_at();

create trigger trg_tracks_updated before update on tracks
for each row execute procedure set_updated_at();
