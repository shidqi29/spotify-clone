export type SidebarPlaylistProps = {
  id: string;
  image: string;
  name: string;
  type: string;
  owner: string;
};

export type SidebarPlaylistData = {
  id: string;
  images: {
    url: string;
  }[];
  name: string;
  type: string;
  owner: {
    display_name: string;
  };
};
