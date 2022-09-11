import { defineStore } from "pinia";
import baseAlbum from "@/utils/albumModel";

const album = JSON.parse(JSON.stringify(baseAlbum));

export const useAlbumStore = defineStore("albumStore", {
  state: () => ({
    album: album,
  }),
});
