'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function page() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([
        {
            "kind": "youtube#searchResult",
            "etag": "9fJOFyHdSWZGZxG91YPEwtwIawo",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UC7Q7pl0z0MrdayvmAnchlJQ"
            },
            "snippet": {
                "publishedAt": "2013-09-24T05:05:09Z",
                "channelId": "UC7Q7pl0z0MrdayvmAnchlJQ",
                "title": "MortaL",
                "description": "Hey Everyone! This is Naman Mathur here! Welcome to “Mortal” YouTube Channel !! I am a full time Streamer ,Entertainer and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/EaHjbYWOY1j94LJoZfJYU9GTo2KOsCtKdZ9GLpUVOa1AWYFDFfT10LKX8yFaqnpyRzX9tYxzgQ=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/EaHjbYWOY1j94LJoZfJYU9GTo2KOsCtKdZ9GLpUVOa1AWYFDFfT10LKX8yFaqnpyRzX9tYxzgQ=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/EaHjbYWOY1j94LJoZfJYU9GTo2KOsCtKdZ9GLpUVOa1AWYFDFfT10LKX8yFaqnpyRzX9tYxzgQ=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "MortaL",
                "liveBroadcastContent": "none",
                "publishTime": "2013-09-24T05:05:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "olrivc9Y5AEaht3gGEgaPgyTR88",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCiSHiDYKtwdpvtgoZKYqhCQ"
            },
            "snippet": {
                "publishedAt": "2019-04-19T14:57:23Z",
                "channelId": "UCiSHiDYKtwdpvtgoZKYqhCQ",
                "title": "Mortal",
                "description": "Scooby Doo Night of 100 Frights Speedrunner and Content Creator Twitch - https://www.twitch.tv/tfxmortal.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kcj73sryBGwA65t8e4a6q6O2t9Wy8Wbq8g1FuN=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kcj73sryBGwA65t8e4a6q6O2t9Wy8Wbq8g1FuN=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kcj73sryBGwA65t8e4a6q6O2t9Wy8Wbq8g1FuN=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mortal",
                "liveBroadcastContent": "none",
                "publishTime": "2019-04-19T14:57:23Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "TCzZCtEPMowyGWA7aN_cJOyAYjk",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCKmLw-0rYN0prXDFITjN4og"
            },
            "snippet": {
                "publishedAt": "2010-04-23T21:25:53Z",
                "channelId": "UCKmLw-0rYN0prXDFITjN4og",
                "title": "Mortal Kombat",
                "description": "The Official Mortal Kombat YouTube Channel It's In Our Blood. Mortal Kombat 1 is available now on Xbox Series S|X, PS5, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/1KnBTYM1iMxAp9ZYhC1cy1ktMzwNQKyhsCQByuek8TeuV7Azt6SeWnx0va8Qu5-N1sFNEVpmQw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/1KnBTYM1iMxAp9ZYhC1cy1ktMzwNQKyhsCQByuek8TeuV7Azt6SeWnx0va8Qu5-N1sFNEVpmQw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/1KnBTYM1iMxAp9ZYhC1cy1ktMzwNQKyhsCQByuek8TeuV7Azt6SeWnx0va8Qu5-N1sFNEVpmQw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mortal Kombat",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2010-04-23T21:25:53Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "IZ0RzdF4EKix9YHfzB7wvGKraH4",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCWjSd1bbKt7Clin6NruG_-Q"
            },
            "snippet": {
                "publishedAt": "2021-06-18T15:36:43Z",
                "channelId": "UCWjSd1bbKt7Clin6NruG_-Q",
                "title": "MortaL Shorts",
                "description": "Shorts by MortaL.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/2mQ5oGlb1J8-csoe3oK2TaH1lQbQYTi1ktNsjQizi72_02-JmcJNFhHFkwXq03Mxb-S-64JN=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/2mQ5oGlb1J8-csoe3oK2TaH1lQbQYTi1ktNsjQizi72_02-JmcJNFhHFkwXq03Mxb-S-64JN=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/2mQ5oGlb1J8-csoe3oK2TaH1lQbQYTi1ktNsjQizi72_02-JmcJNFhHFkwXq03Mxb-S-64JN=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "MortaL Shorts",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2021-06-18T15:36:43Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "jKXmmwPrgm3Nhhf0ctn6LObvnEI",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCDUiL1CVjLZfdfWxMV7PXuA"
            },
            "snippet": {
                "publishedAt": "2023-06-13T10:00:25Z",
                "channelId": "UCDUiL1CVjLZfdfWxMV7PXuA",
                "title": "Mortal Kombat Vietnam Kommunity",
                "description": "Tự hào là sân chơi lành mạnh nhất cho các fan của tựa game Mortal Kombat.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/b_oX9A620bsMZiatATN5SGhaeUU_jWY8HRCK1nUGQ0pC7WqFRK9s7Bcya44uSeQTmxoCcEerVw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/b_oX9A620bsMZiatATN5SGhaeUU_jWY8HRCK1nUGQ0pC7WqFRK9s7Bcya44uSeQTmxoCcEerVw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/b_oX9A620bsMZiatATN5SGhaeUU_jWY8HRCK1nUGQ0pC7WqFRK9s7Bcya44uSeQTmxoCcEerVw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mortal Kombat Vietnam Kommunity",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2023-06-13T10:00:25Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "1J7cOoZoQI8hO1FXiWTLEkAimx4",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCqewtf7TimDQsNNqmNwZbtw"
            },
            "snippet": {
                "publishedAt": "2012-04-16T01:56:04Z",
                "channelId": "UCqewtf7TimDQsNNqmNwZbtw",
                "title": "Mortal Smurph",
                "description": "Rimworld challenges for the journey, not the destination. Having fun and experiencing crazy moments is more important than ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/NUBmD8G-r7HfaH6SNRVxOGafPS93lo9Bal5KbFUHCYe3Y3EGx8UPiVaNX2XJkxlwlhj5nyhAXsM=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/NUBmD8G-r7HfaH6SNRVxOGafPS93lo9Bal5KbFUHCYe3Y3EGx8UPiVaNX2XJkxlwlhj5nyhAXsM=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/NUBmD8G-r7HfaH6SNRVxOGafPS93lo9Bal5KbFUHCYe3Y3EGx8UPiVaNX2XJkxlwlhj5nyhAXsM=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mortal Smurph",
                "liveBroadcastContent": "none",
                "publishTime": "2012-04-16T01:56:04Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "LuFvc4HvJNodJ_M7I1QuzQ_K_e8",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCfhy5HvWdrRch-XqSSLlLRw"
            },
            "snippet": {
                "publishedAt": "2022-03-20T11:29:04Z",
                "channelId": "UCfhy5HvWdrRch-XqSSLlLRw",
                "title": "Mortal Charles",
                "description": "HAGO VIDEOS DE JUEGOS DE MESA. ME GUSTAN LOS JUEGOS DE MESA.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/fBAZqRlbSuGx-aYAtJS5Fgmao91j3TLRQByU3U1p9ho2_HzF3ulU3lO83X6uW3X0BakovlqHpw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/fBAZqRlbSuGx-aYAtJS5Fgmao91j3TLRQByU3U1p9ho2_HzF3ulU3lO83X6uW3X0BakovlqHpw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/fBAZqRlbSuGx-aYAtJS5Fgmao91j3TLRQByU3U1p9ho2_HzF3ulU3lO83X6uW3X0BakovlqHpw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mortal Charles",
                "liveBroadcastContent": "none",
                "publishTime": "2022-03-20T11:29:04Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "5MkJeGd7Hdi8IrnUEjLiqlTXlb0",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCX6x-f7CeDhewViyKkYygHA"
            },
            "snippet": {
                "publishedAt": "2018-01-17T17:09:28Z",
                "channelId": "UCX6x-f7CeDhewViyKkYygHA",
                "title": "Mortal Moto",
                "description": "A GUY WITH A BIKE AND CAMERA. Making Mumbai a better place for motorcyclist, Is my goal. My content is strictly raw. No fancy ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/LfQz85NUkcKYeXekdTusIH-gOqIyaDuQ2TBPrBkGkN-C23nZuP7L4f-LtJj2y2Vfyc4T0UVF8A=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/LfQz85NUkcKYeXekdTusIH-gOqIyaDuQ2TBPrBkGkN-C23nZuP7L4f-LtJj2y2Vfyc4T0UVF8A=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/LfQz85NUkcKYeXekdTusIH-gOqIyaDuQ2TBPrBkGkN-C23nZuP7L4f-LtJj2y2Vfyc4T0UVF8A=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mortal Moto",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2018-01-17T17:09:28Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Bz35Lvr0Ljp0ftt_KIdJrNkNigk",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCHRh0tqEA9rNBkxcXsUf7tA"
            },
            "snippet": {
                "publishedAt": "2021-06-24T14:49:47Z",
                "channelId": "UCHRh0tqEA9rNBkxcXsUf7tA",
                "title": "Adrian Mortal",
                "description": "Hello!! I'm Adrian, and i create videos about Mortal Kombat games and other games. all this videos recorded and edited by me. if ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/QLJmAzOUttuIrF-B0Q4X9Oove8SVEW6Nx7f2zCgyymJehrWn4ULjyfqs4Alt6IeNlCUdG3LQVw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/QLJmAzOUttuIrF-B0Q4X9Oove8SVEW6Nx7f2zCgyymJehrWn4ULjyfqs4Alt6IeNlCUdG3LQVw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/QLJmAzOUttuIrF-B0Q4X9Oove8SVEW6Nx7f2zCgyymJehrWn4ULjyfqs4Alt6IeNlCUdG3LQVw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Adrian Mortal",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-24T14:49:47Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "H_i9MFRaDkg_5a79S8oMIl7jemA",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UC8ym8Pga7z97WHAwLl8rgjg"
            },
            "snippet": {
                "publishedAt": "2015-10-14T19:40:22Z",
                "channelId": "UC8ym8Pga7z97WHAwLl8rgjg",
                "title": "Mortal Player",
                "description": "Opa, meu obgetivo aqui e o, intretenimento, diversão e o mais importante, crescer !! Meu nome e Pedro, e sou um Youtuber a ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/8ThAWBdi_U2ycjy6BF7lJ_feS6F_Jo6QBAaUy3xZ_y8OYCPScy2gprcihB8Gv_PI0B7KH8-hMA=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/8ThAWBdi_U2ycjy6BF7lJ_feS6F_Jo6QBAaUy3xZ_y8OYCPScy2gprcihB8Gv_PI0B7KH8-hMA=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/8ThAWBdi_U2ycjy6BF7lJ_feS6F_Jo6QBAaUy3xZ_y8OYCPScy2gprcihB8Gv_PI0B7KH8-hMA=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mortal Player",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2015-10-14T19:40:22Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "_BYRYqv3GPFiQkAIvc2kBQ1YbEY",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCLQm8HQBd3nbhLOdVYlo8_A"
            },
            "snippet": {
                "publishedAt": "2014-09-02T13:20:23Z",
                "channelId": "UCLQm8HQBd3nbhLOdVYlo8_A",
                "title": "Mortal Kombat X - Topic",
                "description": "Mortal Kombat X is a 2015 fighting game developed by NetherRealm Studios and published by Warner Bros. Interactive ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/nkGZVzZCT86AYZXR-NcfHqb0D_NESSONYY3AZeEcsxdpwC7Me6xcz_m10AY4Rp9PXyq4r18L=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/nkGZVzZCT86AYZXR-NcfHqb0D_NESSONYY3AZeEcsxdpwC7Me6xcz_m10AY4Rp9PXyq4r18L=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/nkGZVzZCT86AYZXR-NcfHqb0D_NESSONYY3AZeEcsxdpwC7Me6xcz_m10AY4Rp9PXyq4r18L=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mortal Kombat X - Topic",
                "liveBroadcastContent": "none",
                "publishTime": "2014-09-02T13:20:23Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "3kHE6pzReecXUhjX9XpaeWwBTb8",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCSN7WFN6rGRT_0Au-Z0xzHA"
            },
            "snippet": {
                "publishedAt": "2020-05-14T00:29:02Z",
                "channelId": "UCSN7WFN6rGRT_0Au-Z0xzHA",
                "title": "Super Kumbia Mortal",
                "description": "canal oficial del grupo Super Kumbia Mortal ! Suscríbete y activa las notificaciones!",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/7ULBQlFWnkbgW1a8DXw_Nmk-TrHoR_c2WwIo8OBOy_I_RmfO_BAoXFdTtdFdIZoCHqiZWHWykzc=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/7ULBQlFWnkbgW1a8DXw_Nmk-TrHoR_c2WwIo8OBOy_I_RmfO_BAoXFdTtdFdIZoCHqiZWHWykzc=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/7ULBQlFWnkbgW1a8DXw_Nmk-TrHoR_c2WwIo8OBOy_I_RmfO_BAoXFdTtdFdIZoCHqiZWHWykzc=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Super Kumbia Mortal",
                "liveBroadcastContent": "none",
                "publishTime": "2020-05-14T00:29:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ggTMyrVD2ycE1D_tIDoyQnk7qVg",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCQ-UAGk6vylOwX7bw9ulVjw"
            },
            "snippet": {
                "publishedAt": "2019-01-02T17:37:20Z",
                "channelId": "UCQ-UAGk6vylOwX7bw9ulVjw",
                "title": "O Grave Mortal",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/-4wXkickMMDBsGAiuZrQVQ7X_jDJ3L1_5tCjla-SloB8JtMCz-RM3eCa6zFJpRmmXD4EsQLD2a8=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/-4wXkickMMDBsGAiuZrQVQ7X_jDJ3L1_5tCjla-SloB8JtMCz-RM3eCa6zFJpRmmXD4EsQLD2a8=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/-4wXkickMMDBsGAiuZrQVQ7X_jDJ3L1_5tCjla-SloB8JtMCz-RM3eCa6zFJpRmmXD4EsQLD2a8=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "O Grave Mortal",
                "liveBroadcastContent": "none",
                "publishTime": "2019-01-02T17:37:20Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Eyj2Pzj-hoQRkSOAdKkJpG-Z75Y",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCl9LZ-hj5LKXW8KoZe_Efew"
            },
            "snippet": {
                "publishedAt": "2019-07-20T04:13:10Z",
                "channelId": "UCl9LZ-hj5LKXW8KoZe_Efew",
                "title": "Mortal Assault",
                "description": "Hola amigos espero les guste los videos que hago, cada vez le trato de meter mas ganas y mas calidad, Estare subiendo videos ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_knaDgY7Dua34N4wcrwkcve8XtNCvjmyvhD-I_l=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_knaDgY7Dua34N4wcrwkcve8XtNCvjmyvhD-I_l=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_knaDgY7Dua34N4wcrwkcve8XtNCvjmyvhD-I_l=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mortal Assault",
                "liveBroadcastContent": "none",
                "publishTime": "2019-07-20T04:13:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "5ZVmQ_dzodv__0v_RjcFliTwzH0",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UClX9Dw3hSNFKNtHHDj3dAoA"
            },
            "snippet": {
                "publishedAt": "2021-06-23T15:04:23Z",
                "channelId": "UClX9Dw3hSNFKNtHHDj3dAoA",
                "title": "The Mortal Phantom",
                "description": "Muy buenas a todos y todas. En este canal encontraréis contenido principalmente de videojuegos. A veces hago Tier Lists y en ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/eS-qhv_DwLIhTs6arhPfXcSdCgXguOfXMn--awWjskBZXzbQvz0uJ5P_kh_vB-abC84h2PUnzA=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/eS-qhv_DwLIhTs6arhPfXcSdCgXguOfXMn--awWjskBZXzbQvz0uJ5P_kh_vB-abC84h2PUnzA=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/eS-qhv_DwLIhTs6arhPfXcSdCgXguOfXMn--awWjskBZXzbQvz0uJ5P_kh_vB-abC84h2PUnzA=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "The Mortal Phantom",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2021-06-23T15:04:23Z"
            }
        }
    ]);

    const handleSearch = async (event) => {
        try {

            const desiredNumberOfEntries = 15;

            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: 'snippet',
                    q: searchTerm,
                    type: 'channel',
                    maxResults: desiredNumberOfEntries,
                    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY, // Replace with your actual API key
                },
            });

            console.log(response.data.items)
            setSearchResults(response.data.items);
            toast.success('Success..');
        } catch (error) {
            console.error('Error fetching search results:', error);
            toast.error('Server Error!!');
            // Handle errors appropriately, e.g., display an error message to the user
        }
    };
    const router = useRouter();
    const handleBack = ()=>{
        router.push("/editor");
    }

    return (
        <div className='h-screen'>
            <section className="flex gap-5 items-center justify-between mx-8 items-start px-6 pt-7 pb-10 bg-white max-md:flex-wrap max-md:px-5 ">
                <div className='flex flex-row'>
                <button onClick={()=>handleBack()}><svg className=" h-[37px] w-[37px]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></button>
                <img className='h-[50px]' src="/Ytblend.jpg" alt="" />
                </div>

                <div className="flex gap-0 max-md:flex-wrap">
                    <input type='text' onChange={(event) => setSearchTerm(event.target.value)} className="rounded-l-3xl pl-3 shrink-0 max-w-full h-9 bg-white border border-black border-solid w-[569px]"></input>
                    <button onClick={(e) => handleSearch(e)} className="shrink-0 h-9 bg-white rounded-r-3xl border border-black border-solid w-[76px] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor" />
                        </svg>
                    </button>

                </div>
                <button className="shrink-0 w-9 h-9 rounded-full bg-zinc-300" aria-label="Button"></button>
            </section>


            {searchResults.length > 0 && (
                <section className="px-6 py-3.5 bg-white max-md:pl-5">
                    {searchResults.map((result) => (
                        <div key={result.id.channelId} className="mx-60 mb-10 flex gap-5 max-md:flex-col max-md:gap-0">
                            {result.snippet.thumbnails && result.snippet.thumbnails.default && (
                                <figure className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                                    <img src={result.snippet.thumbnails.high.url} alt='https://www.svgrepo.com/show/327465/person-circle.svg' className="shrink-0 mx-auto rounded-full bg-zinc-300 h-[118px] w-[118px] max-md:mt-8"></img>
                                </figure>
                            )}
                            <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                                    <div className="flex flow-row justify-between gap-[190px] shrink-0 h-[35px] max-md:max-w-full">
                                        <a href={`https://www.youtube.com/channel/${result.id.channelId}`} target="_blank" rel="noreferrer noopener">
                                            <span className='text-2xl font-black'>{result.snippet.title}</span>
                                        </a>
                                        <button className='bg-black text-white px-3 rounded-full'>Collaborate</button>
                                    </div>
                                    <p className="shrink-0 mt-2.5 h-[73px] max-md:max-w-full">{result.snippet.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            )}


        </div>
    )
}
