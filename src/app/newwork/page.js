'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

export default function page() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([
        {
            "kind": "youtube#searchResult",
            "etag": "9HSHyAtQ3rLFZyAv2EXsk8anXBs",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCJdLhr52BsETFmscxebe_Qg"
            },
            "snippet": {
                "publishedAt": "2018-11-01T19:59:19Z",
                "channelId": "UCJdLhr52BsETFmscxebe_Qg",
                "title": "Random",
                "description": "A legrészletesebb bűnügyi történetek. Annyi rejtélyes és megoldatlan dolog van a Földön, miért ne beszéljünk róla? ¯\\_(ツ)_/¯ A ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/GNBaEAmyffM1kzmaD85iTZAMIyMkhlvHtrqaxoFNsqKHYDLZV9E518Z5FV3rqnjMJmbXZpuw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/GNBaEAmyffM1kzmaD85iTZAMIyMkhlvHtrqaxoFNsqKHYDLZV9E518Z5FV3rqnjMJmbXZpuw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/GNBaEAmyffM1kzmaD85iTZAMIyMkhlvHtrqaxoFNsqKHYDLZV9E518Z5FV3rqnjMJmbXZpuw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random",
                "liveBroadcastContent": "none",
                "publishTime": "2018-11-01T19:59:19Z"
            },
            "statistics": {
                "viewCount": "18598360",
                "subscriberCount": "110000",
                "hiddenSubscriberCount": false,
                "videoCount": "124"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "BELURbuVf02c9WPtT3LAgKP0788",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCOCs0cfh4ii4tJU5S4KDIdg"
            },
            "snippet": {
                "publishedAt": "2015-06-29T04:29:30Z",
                "channelId": "UCOCs0cfh4ii4tJU5S4KDIdg",
                "title": "Random ­",
                "description": "Un canal orientado a la diversión del planeta.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_nkHuSjpnBDAmqx6cit6RCMbGc_8kP0ekB1XV--GA=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_nkHuSjpnBDAmqx6cit6RCMbGc_8kP0ekB1XV--GA=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_nkHuSjpnBDAmqx6cit6RCMbGc_8kP0ekB1XV--GA=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random ­",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2015-06-29T04:29:30Z"
            },
            "statistics": {
                "viewCount": "70639607",
                "subscriberCount": "512000",
                "hiddenSubscriberCount": false,
                "videoCount": "42"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "P3icpInMPBOp_e8U0D925d1mHKs",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCQx7E8ZSBdG5Kb85wG6iipg"
            },
            "snippet": {
                "publishedAt": "2019-10-07T11:30:15Z",
                "channelId": "UCQx7E8ZSBdG5Kb85wG6iipg",
                "title": "Random Video Channel",
                "description": "এটা হচ্ছে একটা এন্টারটেনমেন্ট চ্যানেল । মুলত একজন দর্শক হিসেবে ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mbXtKoukHCMkLuFJT6gjWf69zl8iD6f8XY9h9RyQ=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mbXtKoukHCMkLuFJT6gjWf69zl8iD6f8XY9h9RyQ=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mbXtKoukHCMkLuFJT6gjWf69zl8iD6f8XY9h9RyQ=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Video Channel",
                "liveBroadcastContent": "none",
                "publishTime": "2019-10-07T11:30:15Z"
            },
            "statistics": {
                "viewCount": "720735807",
                "subscriberCount": "3260000",
                "hiddenSubscriberCount": false,
                "videoCount": "1015"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "JXWRwgVbnQ65A2RAdZ0CPPXf8og",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCt9ogPyJ55Z3zRDPkqfaYCQ"
            },
            "snippet": {
                "publishedAt": "2020-01-16T12:28:56Z",
                "channelId": "UCt9ogPyJ55Z3zRDPkqfaYCQ",
                "title": "Random Animation",
                "description": "Contact Us **************** Kolkata *Office Time : 9 AM TO 4 PM * H9G3+MR Kolkata, West Bengal, India * WhatsApp ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/opCwhFsHMKVlwbBVcUa_kTm1cG4fT2mzmP2oxjmiskWc8_vXzWCW4_HO1HcuU4jEoswBPDSX=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/opCwhFsHMKVlwbBVcUa_kTm1cG4fT2mzmP2oxjmiskWc8_vXzWCW4_HO1HcuU4jEoswBPDSX=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/opCwhFsHMKVlwbBVcUa_kTm1cG4fT2mzmP2oxjmiskWc8_vXzWCW4_HO1HcuU4jEoswBPDSX=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Animation",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2020-01-16T12:28:56Z"
            },
            "statistics": {
                "viewCount": "90407054",
                "subscriberCount": "1410000",
                "hiddenSubscriberCount": false,
                "videoCount": "383"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "maxCdOOUwwKaKCV-6Ykt6U7Anj8",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCOdAml44NLV0E9wSsE6T0nA"
            },
            "snippet": {
                "publishedAt": "2018-10-15T11:40:55Z",
                "channelId": "UCOdAml44NLV0E9wSsE6T0nA",
                "title": "Random Animasyon",
                "description": "Merhaba, biz Random Animasyon olarak Türk ve Dünya tarihinde yaşanan savaşları ve tarihe yön veren önemli olayları hızlı, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/qMuk2mRDUtfqRsPN4t7md7MD_wEcIEZfUSBG8Usdi9Mq6NoQ5hLvNsIrYOUfrkelNL5IQiDY=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/qMuk2mRDUtfqRsPN4t7md7MD_wEcIEZfUSBG8Usdi9Mq6NoQ5hLvNsIrYOUfrkelNL5IQiDY=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/qMuk2mRDUtfqRsPN4t7md7MD_wEcIEZfUSBG8Usdi9Mq6NoQ5hLvNsIrYOUfrkelNL5IQiDY=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Animasyon",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2018-10-15T11:40:55Z"
            },
            "statistics": {
                "viewCount": "85309417",
                "subscriberCount": "337000",
                "hiddenSubscriberCount": false,
                "videoCount": "355"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "mmbrAJiRnw6cckKMx6CNTkScDw0",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UC_PD6qVk7DVkzE9yU_jTzIw"
            },
            "snippet": {
                "publishedAt": "2010-08-25T09:10:51Z",
                "channelId": "UC_PD6qVk7DVkzE9yU_jTzIw",
                "title": "Random Making Movies",
                "description": "Välkommen hem.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mIuwDB1pRPPEtgR-wCH6nKFAL28XaQqicZjCfT3g=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mIuwDB1pRPPEtgR-wCH6nKFAL28XaQqicZjCfT3g=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mIuwDB1pRPPEtgR-wCH6nKFAL28XaQqicZjCfT3g=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Making Movies",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2010-08-25T09:10:51Z"
            },
            "statistics": {
                "viewCount": "256338995",
                "subscriberCount": "685000",
                "hiddenSubscriberCount": false,
                "videoCount": "568"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "8yASlmcw1lIQ8lIbLT9HN2niqVc",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCrI3dm4qgAEV67Jc6797WIA"
            },
            "snippet": {
                "publishedAt": "2017-07-05T14:50:06Z",
                "channelId": "UCrI3dm4qgAEV67Jc6797WIA",
                "title": "Random Hands",
                "description": "WELCOME TO RANDOM HANDS!! Greeting from the team \"Unleash the fire, Embrace the metal\" -Random Hands. Just an ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_ldXWk_2GSa_tA1-F731vTSuwE1PFEgNBR06PgMhQ=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_ldXWk_2GSa_tA1-F731vTSuwE1PFEgNBR06PgMhQ=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_ldXWk_2GSa_tA1-F731vTSuwE1PFEgNBR06PgMhQ=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Hands",
                "liveBroadcastContent": "none",
                "publishTime": "2017-07-05T14:50:06Z"
            },
            "statistics": {
                "viewCount": "1274150114",
                "subscriberCount": "6120000",
                "hiddenSubscriberCount": false,
                "videoCount": "135"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "IN42sDMAWxRG6cdRR_tJ8T95OFw",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCJT6JcjZCttm5PHnW9kWluQ"
            },
            "snippet": {
                "publishedAt": "2014-05-04T16:57:49Z",
                "channelId": "UCJT6JcjZCttm5PHnW9kWluQ",
                "title": "JohnSL - Random Products",
                "description": "Hi, my name is John Socha-Leialoha. I'm a software developer by day, so at home I like to do things more mechanical.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/dHsnyM5Pb-z0octQt9JFp6gSS2OHDfpqHhZhxtRqf7LLZkzC5R_n9LfM2ThQ3XooGmWilds5=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/dHsnyM5Pb-z0octQt9JFp6gSS2OHDfpqHhZhxtRqf7LLZkzC5R_n9LfM2ThQ3XooGmWilds5=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/dHsnyM5Pb-z0octQt9JFp6gSS2OHDfpqHhZhxtRqf7LLZkzC5R_n9LfM2ThQ3XooGmWilds5=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "JohnSL - Random Products",
                "liveBroadcastContent": "none",
                "publishTime": "2014-05-04T16:57:49Z"
            },
            "statistics": {
                "viewCount": "2234531",
                "subscriberCount": "33400",
                "hiddenSubscriberCount": false,
                "videoCount": "207"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Q6ODtcn02Hqz-Ld4oA6LRxqdDZI",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCf9RdZvBJGQUjSCBMnXGAPQ"
            },
            "snippet": {
                "publishedAt": "2021-01-30T00:30:36Z",
                "channelId": "UCf9RdZvBJGQUjSCBMnXGAPQ",
                "title": "The King of Random en Español",
                "description": "Hacemos videos dedicados a explorar la vida a través de todo tipo de trucos, experimentos y proyectos random de fin de semana ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lT2LVRayzNdubHTsWwBpPpb5j0ZvmYcGHS0Qj3=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lT2LVRayzNdubHTsWwBpPpb5j0ZvmYcGHS0Qj3=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lT2LVRayzNdubHTsWwBpPpb5j0ZvmYcGHS0Qj3=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "The King of Random en Español",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-30T00:30:36Z"
            },
            "statistics": {
                "viewCount": "1812113",
                "subscriberCount": "21400",
                "hiddenSubscriberCount": false,
                "videoCount": "50"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "hnL68KoShDGAgsORFs2xtWqiMKw",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCYbm0MsdiD-AZprOjEiz1dQ"
            },
            "snippet": {
                "publishedAt": "2017-09-11T11:48:30Z",
                "channelId": "UCYbm0MsdiD-AZprOjEiz1dQ",
                "title": "Random Adam",
                "description": "Rastgele Adam Rastgele Videolar 1- İş buluncak (×) 2- Evlenilecek (×) 3- Saygınlık (×)",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/7ycC2cweBsJEI8EVnq5i7fo5kvb3fUJ8Hc1kAGiprVS6keq_5TlLkQxarG4mDIU7N2zFsuymtg=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/7ycC2cweBsJEI8EVnq5i7fo5kvb3fUJ8Hc1kAGiprVS6keq_5TlLkQxarG4mDIU7N2zFsuymtg=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/7ycC2cweBsJEI8EVnq5i7fo5kvb3fUJ8Hc1kAGiprVS6keq_5TlLkQxarG4mDIU7N2zFsuymtg=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Adam",
                "liveBroadcastContent": "none",
                "publishTime": "2017-09-11T11:48:30Z"
            },
            "statistics": {
                "viewCount": "11123905",
                "subscriberCount": "50600",
                "hiddenSubscriberCount": false,
                "videoCount": "117"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "0EdVC6FuYMuq1jOhlM4cjbAQaAo",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCAAY6ZLN2CBRXvL-0eEmD2A"
            },
            "snippet": {
                "publishedAt": "2018-11-10T05:09:50Z",
                "channelId": "UCAAY6ZLN2CBRXvL-0eEmD2A",
                "title": "Memes Random",
                "description": "solo memes.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mJz__gu5Kso_Ss8qio3PvT8gcUa8NG1zNtV7ra5Q=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mJz__gu5Kso_Ss8qio3PvT8gcUa8NG1zNtV7ra5Q=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mJz__gu5Kso_Ss8qio3PvT8gcUa8NG1zNtV7ra5Q=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Memes Random",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2018-11-10T05:09:50Z"
            },
            "statistics": {
                "viewCount": "1360384353",
                "subscriberCount": "4720000",
                "hiddenSubscriberCount": false,
                "videoCount": "619"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "t7lEgE-tOITOy-ev5a_2N40uEtQ",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCSNuChaddbRFIsU-V9yyZ8Q"
            },
            "snippet": {
                "publishedAt": "2021-05-07T09:02:55Z",
                "channelId": "UCSNuChaddbRFIsU-V9yyZ8Q",
                "title": "Random Romania",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/WhexVlJl6GBgDdCaif4DRAgTTqIS3IKs6ih0lx19c4YAzJsRtZV1zX2tCsK-PaFvRr5XUX7jCNE=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/WhexVlJl6GBgDdCaif4DRAgTTqIS3IKs6ih0lx19c4YAzJsRtZV1zX2tCsK-PaFvRr5XUX7jCNE=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/WhexVlJl6GBgDdCaif4DRAgTTqIS3IKs6ih0lx19c4YAzJsRtZV1zX2tCsK-PaFvRr5XUX7jCNE=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Romania",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-07T09:02:55Z"
            },
            "statistics": {
                "viewCount": "593745",
                "subscriberCount": "8780",
                "hiddenSubscriberCount": false,
                "videoCount": "33"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "a7QAsSh-mPh1WGT7An4udd_4W8w",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UC3_AWXcf2K3l9ILVuQe-XwQ"
            },
            "snippet": {
                "publishedAt": "2012-07-25T01:28:45Z",
                "channelId": "UC3_AWXcf2K3l9ILVuQe-XwQ",
                "title": "Matthias random stuff",
                "description": "This is my odds and ends channel for random videos and videos note quite interesting enough for my main channel.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lveyOSs1KI_ApQzsNuRnm6rlWYS8d60fewguej=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lveyOSs1KI_ApQzsNuRnm6rlWYS8d60fewguej=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lveyOSs1KI_ApQzsNuRnm6rlWYS8d60fewguej=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Matthias random stuff",
                "liveBroadcastContent": "none",
                "publishTime": "2012-07-25T01:28:45Z"
            },
            "statistics": {
                "viewCount": "38684438",
                "subscriberCount": "192000",
                "hiddenSubscriberCount": false,
                "videoCount": "275"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "YT3rMVN8s5FfirpC4Otzj2CBWi8",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCx6qTDozyFfoIR7t6E1Vrlw"
            },
            "snippet": {
                "publishedAt": "2018-03-23T20:23:55Z",
                "channelId": "UCx6qTDozyFfoIR7t6E1Vrlw",
                "title": "El Random",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_k8dCdTNcLNNSv3_qWxA8vnj1UFCIcIugqps9v9=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_k8dCdTNcLNNSv3_qWxA8vnj1UFCIcIugqps9v9=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_k8dCdTNcLNNSv3_qWxA8vnj1UFCIcIugqps9v9=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "El Random",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2018-03-23T20:23:55Z"
            },
            "statistics": {
                "viewCount": "13770225",
                "subscriberCount": "629000",
                "hiddenSubscriberCount": false,
                "videoCount": "57"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "fkTmXyzWcHa6GDLAXAStaHAKqks",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCxUa5S2LvT8Q5cf0U5krtag"
            },
            "snippet": {
                "publishedAt": "2021-07-09T14:02:38Z",
                "channelId": "UCxUa5S2LvT8Q5cf0U5krtag",
                "title": "RANDOM THINGS by Pamilyang M",
                "description": "Pang kalahatang uri ng content ang aming ihahatid sa lahat. Pang karaniwang buhay, pagluluto, mga gawaing bahay , mga ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/EuuJ1ao1zWUdmswc4huOyJYG4veO1Nrsy9E7XHgxs1g3tSUb6sdXvqq1bmV1tlF1R4rX__hN-g=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/EuuJ1ao1zWUdmswc4huOyJYG4veO1Nrsy9E7XHgxs1g3tSUb6sdXvqq1bmV1tlF1R4rX__hN-g=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/EuuJ1ao1zWUdmswc4huOyJYG4veO1Nrsy9E7XHgxs1g3tSUb6sdXvqq1bmV1tlF1R4rX__hN-g=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "RANDOM THINGS by Pamilyang M",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2021-07-09T14:02:38Z"
            },
            "statistics": {
                "viewCount": "1386948",
                "subscriberCount": "8220",
                "hiddenSubscriberCount": false,
                "videoCount": "1338"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "4o6S1mafE9oO6qkhAeOyaigMMZ0",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCSgmxhnHFCsLI9RLnfxcDsA"
            },
            "snippet": {
                "publishedAt": "2019-03-06T07:54:46Z",
                "channelId": "UCSgmxhnHFCsLI9RLnfxcDsA",
                "title": "Tipsy Goes Random",
                "description": "Yo!",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mfS77PmO2UxhM2duYPEFRtiy5FsTdml7SuX6nD=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mfS77PmO2UxhM2duYPEFRtiy5FsTdml7SuX6nD=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mfS77PmO2UxhM2duYPEFRtiy5FsTdml7SuX6nD=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Tipsy Goes Random",
                "liveBroadcastContent": "none",
                "publishTime": "2019-03-06T07:54:46Z"
            },
            "statistics": {
                "viewCount": "23978857",
                "subscriberCount": "281000",
                "hiddenSubscriberCount": false,
                "videoCount": "336"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qN92mcLuzgQuScBE5vgPSSpq2nk",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCAEaQJe3PfCJKToB9-93JEg"
            },
            "snippet": {
                "publishedAt": "2019-01-26T14:13:33Z",
                "channelId": "UCAEaQJe3PfCJKToB9-93JEg",
                "title": "Random Solo",
                "description": "Emanuele Caso in arte RANDOM, è un cantante e autore italiano. Classe 2001, nasce a Massa di Somma (NA). Etichetta: Visory ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kdgFwa9rLblZ1mOUcz7c4DT6aCp7e8w94puAiM=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kdgFwa9rLblZ1mOUcz7c4DT6aCp7e8w94puAiM=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kdgFwa9rLblZ1mOUcz7c4DT6aCp7e8w94puAiM=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Solo",
                "liveBroadcastContent": "none",
                "publishTime": "2019-01-26T14:13:33Z"
            },
            "statistics": {
                "viewCount": "166903451",
                "subscriberCount": "253000",
                "hiddenSubscriberCount": false,
                "videoCount": "16"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Kg3u1WPKcY-RSh4yfsTPdX5dhF8",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCASCCG9NfuLGpNl7q8njeCQ"
            },
            "snippet": {
                "publishedAt": "2020-04-12T16:53:41Z",
                "channelId": "UCASCCG9NfuLGpNl7q8njeCQ",
                "title": "Random Cricket Photos Podcast",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_k4KHI_cfDGAeMFzn6nQexw3-roBJeZsAXOEIA0=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_k4KHI_cfDGAeMFzn6nQexw3-roBJeZsAXOEIA0=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_k4KHI_cfDGAeMFzn6nQexw3-roBJeZsAXOEIA0=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Cricket Photos Podcast",
                "liveBroadcastContent": "none",
                "publishTime": "2020-04-12T16:53:41Z"
            },
            "statistics": {
                "viewCount": "46074",
                "subscriberCount": "2360",
                "hiddenSubscriberCount": false,
                "videoCount": "37"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "yi8bIugOdJmXuHg2TCRoIfY6nm8",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UC8RrHpql7M97Lqyg9J6hSww"
            },
            "snippet": {
                "publishedAt": "2015-07-28T06:56:58Z",
                "channelId": "UC8RrHpql7M97Lqyg9J6hSww",
                "title": "Random Chikibum",
                "description": "Random Chikibum is a comedy channel by Rahul Subramanian & Kumar Varun. Subscribe to this channel to watch their stand up ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kAHdZytMtrN8D3ZHrUym2PmiWVqxi7gig2cBv7=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kAHdZytMtrN8D3ZHrUym2PmiWVqxi7gig2cBv7=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kAHdZytMtrN8D3ZHrUym2PmiWVqxi7gig2cBv7=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Chikibum",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2015-07-28T06:56:58Z"
            },
            "statistics": {
                "viewCount": "109557906",
                "subscriberCount": "732000",
                "hiddenSubscriberCount": false,
                "videoCount": "130"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "SXZNLNvDGBak7Hok-p_hgtWlXqk",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCztqhJVZG-KBEcHOaCFEGaQ"
            },
            "snippet": {
                "publishedAt": "2019-06-22T16:39:24Z",
                "channelId": "UCztqhJVZG-KBEcHOaCFEGaQ",
                "title": "Vida Random 2.0 ",
                "description": "Todos mis videos se rigen bajo estas políticas: Referencias educativas, humorísticas o musicales sobre drogas recreativas o ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/-UMYxIr_3vJbYCHHotnGmFxenpD_JV9pnmAW7YZR_ZLQ7iyS1TlLWyLvWXr1b6jU2wNndTxg=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/-UMYxIr_3vJbYCHHotnGmFxenpD_JV9pnmAW7YZR_ZLQ7iyS1TlLWyLvWXr1b6jU2wNndTxg=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/-UMYxIr_3vJbYCHHotnGmFxenpD_JV9pnmAW7YZR_ZLQ7iyS1TlLWyLvWXr1b6jU2wNndTxg=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Vida Random 2.0 ",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2019-06-22T16:39:24Z"
            },
            "statistics": {
                "viewCount": "325528",
                "subscriberCount": "21900",
                "hiddenSubscriberCount": false,
                "videoCount": "91"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qHQgmBdiAFffVHRGbH4DLyUbYnc",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCPf3nQQUxjYKxoBEWHoY9Fw"
            },
            "snippet": {
                "publishedAt": "2019-07-13T00:04:36Z",
                "channelId": "UCPf3nQQUxjYKxoBEWHoY9Fw",
                "title": "Bruno&Joel RANDOM",
                "description": "Producto virales, explosiones, armas ninjas, aviones, retos de comida viral, parques acuáticos y otras cosas epicas podras ver ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mqeySo0hs7P6hYcq_4o4xrGvWLlP0E2QUY87qdFg=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mqeySo0hs7P6hYcq_4o4xrGvWLlP0E2QUY87qdFg=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mqeySo0hs7P6hYcq_4o4xrGvWLlP0E2QUY87qdFg=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Bruno&Joel RANDOM",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2019-07-13T00:04:36Z"
            },
            "statistics": {
                "viewCount": "657320715",
                "subscriberCount": "2620000",
                "hiddenSubscriberCount": false,
                "videoCount": "255"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "uDe92BGtFLmf-H8lr7ftISr29ow",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCLm_km9prsZpNcJ-TmLWT6Q"
            },
            "snippet": {
                "publishedAt": "2021-04-15T08:13:42Z",
                "channelId": "UCLm_km9prsZpNcJ-TmLWT6Q",
                "title": "Random Comparison",
                "description": "Hey I'm Random Comparison I upload video of Geography For business enquiries:- RComparisonofficial@gmail.com.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/b3l838uNLRqH179kKpXGjwIi3S1Azef1rmAm2k4xUQRxJS-rSWPzGAJr4EFqZu7fIpi9oaS4qw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/b3l838uNLRqH179kKpXGjwIi3S1Azef1rmAm2k4xUQRxJS-rSWPzGAJr4EFqZu7fIpi9oaS4qw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/b3l838uNLRqH179kKpXGjwIi3S1Azef1rmAm2k4xUQRxJS-rSWPzGAJr4EFqZu7fIpi9oaS4qw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Comparison",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2021-04-15T08:13:42Z"
            },
            "statistics": {
                "viewCount": "22508048",
                "subscriberCount": "185000",
                "hiddenSubscriberCount": false,
                "videoCount": "228"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "DsTqcoGCXX6Pqqq9pVujdGCMLCk",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UChYTWaazrSd5l24CLIQ1Tlg"
            },
            "snippet": {
                "publishedAt": "2023-11-01T10:57:34Z",
                "channelId": "UChYTWaazrSd5l24CLIQ1Tlg",
                "title": "Random _Sachen",
                "description": "Tipp✨   HOLA👁️  👁️ ihr kleinen Äffchen   Meine Name ist Charlotte mit stummen „E“ aber ich werde lieber Charlie genannt ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/l0dnl0LdQWlZ0kVWzH3jfEicsOn4JFWN_0hztX2E_9Xt7lcfeaX-X40vtVCvEhQXM9HeazIw7Q=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/l0dnl0LdQWlZ0kVWzH3jfEicsOn4JFWN_0hztX2E_9Xt7lcfeaX-X40vtVCvEhQXM9HeazIw7Q=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/l0dnl0LdQWlZ0kVWzH3jfEicsOn4JFWN_0hztX2E_9Xt7lcfeaX-X40vtVCvEhQXM9HeazIw7Q=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random _Sachen",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2023-11-01T10:57:34Z"
            },
            "statistics": {
                "viewCount": "81483",
                "subscriberCount": "1350",
                "hiddenSubscriberCount": false,
                "videoCount": "62"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "_XftLdU61Tx_YLOhXHPyIolxi34",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCoMc0zniPatlGpR6OQiM-Qg"
            },
            "snippet": {
                "publishedAt": "2012-10-04T20:34:51Z",
                "channelId": "UCoMc0zniPatlGpR6OQiM-Qg",
                "title": "Didi Random",
                "description": "Seit 2017 beschäftige ich mich mit Bitcoin Ethereum & Co. In meinen Videos zeige ich meine Tipps, wie ich mein Portfolio ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/cdX2VZ74dW4fiNICTw_AjfZxcnxRCfbO-Zlxrv45VwSRq8M3jZJlAuLFiY4NeMu8nTlT7Dnvlw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/cdX2VZ74dW4fiNICTw_AjfZxcnxRCfbO-Zlxrv45VwSRq8M3jZJlAuLFiY4NeMu8nTlT7Dnvlw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/cdX2VZ74dW4fiNICTw_AjfZxcnxRCfbO-Zlxrv45VwSRq8M3jZJlAuLFiY4NeMu8nTlT7Dnvlw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Didi Random",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2012-10-04T20:34:51Z"
            },
            "statistics": {
                "viewCount": "1623727",
                "subscriberCount": "14200",
                "hiddenSubscriberCount": false,
                "videoCount": "770"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "JXP4FGH_yb2EAuindK9t8uEJRD4",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCs0AHPpG3r0qi9ZFXTRqhpg"
            },
            "snippet": {
                "publishedAt": "2021-12-02T03:34:45Z",
                "channelId": "UCs0AHPpG3r0qi9ZFXTRqhpg",
                "title": "Random Thoughts VM",
                "description": "VIVEK MISHRA welcome you to this channel \"RANDOM THOUGHTS VM\" where you can find :- 1) Short 1 minute Motivational ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/t1h5bB0jl4dYWQZ8co7vI7zk-kCJJwCne3810FUVTojkXJEPuTpZGjEs47uhTbrcW-_mPbg=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/t1h5bB0jl4dYWQZ8co7vI7zk-kCJJwCne3810FUVTojkXJEPuTpZGjEs47uhTbrcW-_mPbg=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/t1h5bB0jl4dYWQZ8co7vI7zk-kCJJwCne3810FUVTojkXJEPuTpZGjEs47uhTbrcW-_mPbg=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Thoughts VM",
                "liveBroadcastContent": "none",
                "publishTime": "2021-12-02T03:34:45Z"
            },
            "statistics": {
                "viewCount": "4022685",
                "subscriberCount": "9000",
                "hiddenSubscriberCount": false,
                "videoCount": "211"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "il-w6R3D1rcCQsU5xdeqrQVwA6k",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCIQC-HIOvmivAMKY46OfWRg"
            },
            "snippet": {
                "publishedAt": "2013-06-09T00:43:10Z",
                "channelId": "UCIQC-HIOvmivAMKY46OfWRg",
                "title": "DIY Marshel Random",
                "description": "Bienvenidos a mi canal, aquí te mostraré distintas manualidades con material reciclado, foami, cerámicas, pinturas acrílicas, telas ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/SyYvEN_HJ4TWAsky_47Dgly05hqANGq2C2J7YrRGgQ98w38YELH5SVna7iIWe8dzSRV5SCG0iKY=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/SyYvEN_HJ4TWAsky_47Dgly05hqANGq2C2J7YrRGgQ98w38YELH5SVna7iIWe8dzSRV5SCG0iKY=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/SyYvEN_HJ4TWAsky_47Dgly05hqANGq2C2J7YrRGgQ98w38YELH5SVna7iIWe8dzSRV5SCG0iKY=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "DIY Marshel Random",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2013-06-09T00:43:10Z"
            },
            "statistics": {
                "viewCount": "58398905",
                "subscriberCount": "273000",
                "hiddenSubscriberCount": false,
                "videoCount": "781"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "hRzxOdXbPMUTbsP_mKzE10XEreM",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCWwZGGoPLUfZmhm5zwKGHbg"
            },
            "snippet": {
                "publishedAt": "2015-08-19T16:38:43Z",
                "channelId": "UCWwZGGoPLUfZmhm5zwKGHbg",
                "title": "Random Acts",
                "description": "Random Acts is Channel 4's home for the world's most creative short films. Catch up with the TV series on All4 now: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mNB8CczSYS8H6kPrtD2G3cx9OXR1mrdzz06EL0=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mNB8CczSYS8H6kPrtD2G3cx9OXR1mrdzz06EL0=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mNB8CczSYS8H6kPrtD2G3cx9OXR1mrdzz06EL0=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Acts",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2015-08-19T16:38:43Z"
            },
            "statistics": {
                "viewCount": "15183424",
                "subscriberCount": "41400",
                "hiddenSubscriberCount": false,
                "videoCount": "940"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ZlTYavgLQ826nJau-Qm6a2LvdvM",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCdEGjeLFrRX6F1Xx58IV_ZQ"
            },
            "snippet": {
                "publishedAt": "2019-01-14T17:39:06Z",
                "channelId": "UCdEGjeLFrRX6F1Xx58IV_ZQ",
                "title": "Random Film Talk",
                "description": "I am Charlie. I talk about films. And occasionally TV shows. Second Channel - https://www.youtube.com/@RandomFTStreamVods ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lxBMeGEm_sGwI9Mx9NBAlD9R7GhN1ul6bCGAB5gQ=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lxBMeGEm_sGwI9Mx9NBAlD9R7GhN1ul6bCGAB5gQ=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lxBMeGEm_sGwI9Mx9NBAlD9R7GhN1ul6bCGAB5gQ=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Film Talk",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2019-01-14T17:39:06Z"
            },
            "statistics": {
                "viewCount": "6503097",
                "subscriberCount": "40800",
                "hiddenSubscriberCount": false,
                "videoCount": "23"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "_YdpUl7gIFmCciviZe14nlFff1c",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCkv3OZB9ihF0C2d0uX1Mj1A"
            },
            "snippet": {
                "publishedAt": "2021-10-23T18:11:49Z",
                "channelId": "UCkv3OZB9ihF0C2d0uX1Mj1A",
                "title": "other random user",
                "description": "No soy el verdadero flex solo soy un fan Únete a mi whats https://whatsapp.com/channel/0029VaOEuYGFMqrc8dBYs441.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ZVA-9SwQCXH9kNMWwvrpWhMAuMa-aqHNpLmB81luCRuslZ2H4aEkzv9DI1K-OqGdJHxhy2tE=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ZVA-9SwQCXH9kNMWwvrpWhMAuMa-aqHNpLmB81luCRuslZ2H4aEkzv9DI1K-OqGdJHxhy2tE=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ZVA-9SwQCXH9kNMWwvrpWhMAuMa-aqHNpLmB81luCRuslZ2H4aEkzv9DI1K-OqGdJHxhy2tE=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "other random user",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2021-10-23T18:11:49Z"
            },
            "statistics": {
                "viewCount": "198869",
                "subscriberCount": "1850",
                "hiddenSubscriberCount": false,
                "videoCount": "80"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ZdqZxJbfLfckj2TNoTd-YdP0PrA",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCfdm7fLgN9FIdYWiHAAv_tg"
            },
            "snippet": {
                "publishedAt": "2020-05-03T08:46:39Z",
                "channelId": "UCfdm7fLgN9FIdYWiHAAv_tg",
                "title": "The Random Explorer",
                "description": "Welcome to our channel, where love knows no borders and adventures are always on the horizon! Join us on our journey as we ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/HmSJL1aKlVE9ZWDIRbnH3il4mQqrUZ3yd1Zj9sZOM2UUT3su89q64DgPBnWKBQ1u4ZseHUF41dI=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/HmSJL1aKlVE9ZWDIRbnH3il4mQqrUZ3yd1Zj9sZOM2UUT3su89q64DgPBnWKBQ1u4ZseHUF41dI=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/HmSJL1aKlVE9ZWDIRbnH3il4mQqrUZ3yd1Zj9sZOM2UUT3su89q64DgPBnWKBQ1u4ZseHUF41dI=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "The Random Explorer",
                "liveBroadcastContent": "none",
                "publishTime": "2020-05-03T08:46:39Z"
            },
            "statistics": {
                "viewCount": "507125",
                "subscriberCount": "5980",
                "hiddenSubscriberCount": false,
                "videoCount": "127"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Z-pAbw-gaSsf9I5-aQ5-Df0wBhA",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCQMDHyKXGHrPLRI1LwUQXDA"
            },
            "snippet": {
                "publishedAt": "2015-07-08T17:08:37Z",
                "channelId": "UCQMDHyKXGHrPLRI1LwUQXDA",
                "title": "Mr Random Reviews",
                "description": "Welcome to one of the most diverse channels on youtube! if you like any of the following then this channel is for you. Cars RC cars ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mNaaY5093V8cH3AshGQZlV-gF_cVtqy7ijlMkpNw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mNaaY5093V8cH3AshGQZlV-gF_cVtqy7ijlMkpNw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mNaaY5093V8cH3AshGQZlV-gF_cVtqy7ijlMkpNw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Mr Random Reviews",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2015-07-08T17:08:37Z"
            },
            "statistics": {
                "viewCount": "41562530",
                "subscriberCount": "121000",
                "hiddenSubscriberCount": false,
                "videoCount": "871"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "UAmmrvz6iFNV4N8Z0O6bUb5rFqE",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCroJ5uxmGr-WOtXUPyqeh6g"
            },
            "snippet": {
                "publishedAt": "2011-06-07T23:10:32Z",
                "channelId": "UCroJ5uxmGr-WOtXUPyqeh6g",
                "title": "Random Encounters",
                "description": "WARNING! ☢ Video Game Musicals are not for everyone. But they should be. ♫ Interested in animating or covering one of our ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_nyk5FiW8sf6L_C3CizCVwcnHGBiDENmHz3uVsqNw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_nyk5FiW8sf6L_C3CizCVwcnHGBiDENmHz3uVsqNw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_nyk5FiW8sf6L_C3CizCVwcnHGBiDENmHz3uVsqNw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Encounters",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2011-06-07T23:10:32Z"
            },
            "statistics": {
                "viewCount": "1852038574",
                "subscriberCount": "4340000",
                "hiddenSubscriberCount": false,
                "videoCount": "925"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ZQ9Sc9_ITVfwYNOcy03ynUZvyqQ",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCGnMCNQzrOiYo7SCdUgUgeQ"
            },
            "snippet": {
                "publishedAt": "2013-02-27T06:04:50Z",
                "channelId": "UCGnMCNQzrOiYo7SCdUgUgeQ",
                "title": "Random Respawn",
                "description": "Welcome to Random Respawn, where we talk about gaming news, gaming things, and gaming stuff.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_ldNqu1Nmet28Txw63g1kMUzFYsjoT34Jltf7IgZw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_ldNqu1Nmet28Txw63g1kMUzFYsjoT34Jltf7IgZw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_ldNqu1Nmet28Txw63g1kMUzFYsjoT34Jltf7IgZw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Respawn",
                "liveBroadcastContent": "none",
                "publishTime": "2013-02-27T06:04:50Z"
            },
            "statistics": {
                "viewCount": "17554648",
                "subscriberCount": "46500",
                "hiddenSubscriberCount": false,
                "videoCount": "380"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "KA4tYf5W3RMHiwhySznU1MHRXTs",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCIjlAtj68oLG0HhMronlb3Q"
            },
            "snippet": {
                "publishedAt": "2015-06-23T19:32:03Z",
                "channelId": "UCIjlAtj68oLG0HhMronlb3Q",
                "title": "Random MKT",
                "description": "Marketing, publicidad, negocios, innovación. En un mundo que avanza tan aleatorio, Hans Hatch es el encargado de guiarte y ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/UYBLCUppR0VtN4bXdoI9RuwSNk2huwx5PM0wiUKoo_5hlnGX-d81-MpXNZeKxEO-PxovltmiRQ=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/UYBLCUppR0VtN4bXdoI9RuwSNk2huwx5PM0wiUKoo_5hlnGX-d81-MpXNZeKxEO-PxovltmiRQ=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/UYBLCUppR0VtN4bXdoI9RuwSNk2huwx5PM0wiUKoo_5hlnGX-d81-MpXNZeKxEO-PxovltmiRQ=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random MKT",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2015-06-23T19:32:03Z"
            },
            "statistics": {
                "viewCount": "38859",
                "subscriberCount": "966",
                "hiddenSubscriberCount": false,
                "videoCount": "132"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "H8YeN2pIVpH4CDp0ktlckJdGrhA",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCls9xfZwww2IJk6_K3K0svw"
            },
            "snippet": {
                "publishedAt": "2015-11-03T01:41:10Z",
                "channelId": "UCls9xfZwww2IJk6_K3K0svw",
                "title": "Random HD",
                "description": "Querés aprender los conceptos básicos de la biología? Este es tu canal.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mZ-FYDak3K8OxyB5uXRSbEIBRYUqLuDBhy_mh8PcE=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mZ-FYDak3K8OxyB5uXRSbEIBRYUqLuDBhy_mh8PcE=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mZ-FYDak3K8OxyB5uXRSbEIBRYUqLuDBhy_mh8PcE=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random HD",
                "liveBroadcastContent": "none",
                "publishTime": "2015-11-03T01:41:10Z"
            },
            "statistics": {
                "viewCount": "2379716",
                "subscriberCount": "16700",
                "hiddenSubscriberCount": false,
                "videoCount": "23"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "F30vVS5drh6uwXbFWJt9CzY3gGc",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCItwdaFVaE4LvwfXk942xfA"
            },
            "snippet": {
                "publishedAt": "2021-04-26T21:55:15Z",
                "channelId": "UCItwdaFVaE4LvwfXk942xfA",
                "title": "LIT Random",
                "description": "Directos completos de LIT KILLAH y a veces, de otros streamers. No es un canal oficial de Lit Killah.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/TgpEBPd1Rvqk58Dol5JRwZxKNiU1NV8tSITrSqg0iTgTQj4DQ2nouMxyLs3iuJi-rOsGR6ch=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/TgpEBPd1Rvqk58Dol5JRwZxKNiU1NV8tSITrSqg0iTgTQj4DQ2nouMxyLs3iuJi-rOsGR6ch=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/TgpEBPd1Rvqk58Dol5JRwZxKNiU1NV8tSITrSqg0iTgTQj4DQ2nouMxyLs3iuJi-rOsGR6ch=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "LIT Random",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-26T21:55:15Z"
            },
            "statistics": {
                "viewCount": "4651763",
                "subscriberCount": "53300",
                "hiddenSubscriberCount": false,
                "videoCount": "145"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qa-T7qlhUJvH6BDAE7QUw1QwLRc",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCVk5ElPpWLbV51wMTef57qQ"
            },
            "snippet": {
                "publishedAt": "2023-02-04T11:25:24Z",
                "channelId": "UCVk5ElPpWLbV51wMTef57qQ",
                "title": "Random Vlogs in telugu",
                "description": "Complete Entertainment #shorts#vlogs#nature #fun#information #resorts #travelvlogs #food #unboxing #movie celebration.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/2zqwIL8T4Cdl276QN0aeAjtzYusyK0McVz1gvt3X-7zMCkNQdhR_AhdlutxXij4uLPlNaAVZ=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/2zqwIL8T4Cdl276QN0aeAjtzYusyK0McVz1gvt3X-7zMCkNQdhR_AhdlutxXij4uLPlNaAVZ=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/2zqwIL8T4Cdl276QN0aeAjtzYusyK0McVz1gvt3X-7zMCkNQdhR_AhdlutxXij4uLPlNaAVZ=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Vlogs in telugu",
                "liveBroadcastContent": "none",
                "publishTime": "2023-02-04T11:25:24Z"
            },
            "statistics": {
                "viewCount": "158563",
                "subscriberCount": "329",
                "hiddenSubscriberCount": false,
                "videoCount": "201"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "sDGYr7Iw6wKMGfPBXTnuXyuFrUo",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCleDjzysCURXT2AQ6f_TBMg"
            },
            "snippet": {
                "publishedAt": "2023-01-03T14:23:30Z",
                "channelId": "UCleDjzysCURXT2AQ6f_TBMg",
                "title": "Random Vlogs1857",
                "description": "আমি সবাইর কাছে দোয়া চাই।সবাইর স হযো. গিতা একান্ত কাম্য . মাশাআল্লাহ ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/AKH7Fvbs3hgravRI-DMBN46IG5NBp2mh9H989UVOyeNNrvPYpdD4r6xAw9gXDq_-SYVbbLXJgQ=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/AKH7Fvbs3hgravRI-DMBN46IG5NBp2mh9H989UVOyeNNrvPYpdD4r6xAw9gXDq_-SYVbbLXJgQ=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/AKH7Fvbs3hgravRI-DMBN46IG5NBp2mh9H989UVOyeNNrvPYpdD4r6xAw9gXDq_-SYVbbLXJgQ=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Vlogs1857",
                "liveBroadcastContent": "none",
                "publishTime": "2023-01-03T14:23:30Z"
            },
            "statistics": {
                "viewCount": "281385",
                "subscriberCount": "1150",
                "hiddenSubscriberCount": false,
                "videoCount": "440"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "TK-XJXRoTSNpFXSqAJ2D9nDHGM8",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCt9LN8wOVf8wgQ0APvA_Z6g"
            },
            "snippet": {
                "publishedAt": "2023-09-28T17:21:22Z",
                "channelId": "UCt9LN8wOVf8wgQ0APvA_Z6g",
                "title": "Random Classes",
                "description": "Teacher- Ravi Sir Address-Gangwal Bazar ,Bahraich 271821 Contact- 9838365152 Follow on Instagram ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/L_tyCR2Hjxbp83ktkwsUoLHcPu3ZHogmtEp6dBmXi1EUL_WCFvDTilrgsmElZ4ze3Le6EhPJY4M=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/L_tyCR2Hjxbp83ktkwsUoLHcPu3ZHogmtEp6dBmXi1EUL_WCFvDTilrgsmElZ4ze3Le6EhPJY4M=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/L_tyCR2Hjxbp83ktkwsUoLHcPu3ZHogmtEp6dBmXi1EUL_WCFvDTilrgsmElZ4ze3Le6EhPJY4M=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Classes",
                "liveBroadcastContent": "none",
                "publishTime": "2023-09-28T17:21:22Z"
            },
            "statistics": {
                "viewCount": "38296",
                "subscriberCount": "206",
                "hiddenSubscriberCount": false,
                "videoCount": "53"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "_XLwneqjr78EMKEtHZUZV6O9jWI",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCORBbrZPW3_fFwtAWIt-2Ew"
            },
            "snippet": {
                "publishedAt": "2019-09-21T02:22:55Z",
                "channelId": "UCORBbrZPW3_fFwtAWIt-2Ew",
                "title": "Random Creations",
                "description": "I make cool things.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_nH8S2sIlW_MXAKfxTC3lKYjd-j7t6_8azxn2GY=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_nH8S2sIlW_MXAKfxTC3lKYjd-j7t6_8azxn2GY=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_nH8S2sIlW_MXAKfxTC3lKYjd-j7t6_8azxn2GY=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Creations",
                "liveBroadcastContent": "none",
                "publishTime": "2019-09-21T02:22:55Z"
            },
            "statistics": {
                "viewCount": "452002",
                "subscriberCount": "18100",
                "hiddenSubscriberCount": false,
                "videoCount": "58"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "VUl0wqKhFZavBnvuHxQmhAY3Eas",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCyP-qPzi-cHlezXLQroScSQ"
            },
            "snippet": {
                "publishedAt": "2020-12-27T16:45:23Z",
                "channelId": "UCyP-qPzi-cHlezXLQroScSQ",
                "title": "Miss Random",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/BODj5NjHPW-mZXYaBZm_up2Y-VGV_RqGpO7z89C-_hJQjQ4YNb-Quw392xE2Hhhm9_OpDLX7PA=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/BODj5NjHPW-mZXYaBZm_up2Y-VGV_RqGpO7z89C-_hJQjQ4YNb-Quw392xE2Hhhm9_OpDLX7PA=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/BODj5NjHPW-mZXYaBZm_up2Y-VGV_RqGpO7z89C-_hJQjQ4YNb-Quw392xE2Hhhm9_OpDLX7PA=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Miss Random",
                "liveBroadcastContent": "none",
                "publishTime": "2020-12-27T16:45:23Z"
            },
            "statistics": {
                "viewCount": "3115336",
                "subscriberCount": "18900",
                "hiddenSubscriberCount": false,
                "videoCount": "103"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "NTvn-Ol-T6hcPe-7UsGaLvP9Dxk",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCj2LAWaXvE43_r34XOjxR9w"
            },
            "snippet": {
                "publishedAt": "2022-03-12T06:42:01Z",
                "channelId": "UCj2LAWaXvE43_r34XOjxR9w",
                "title": "RANDOM IT SOLUTIONS",
                "description": "Welcome to RANDOM IT SOLUTIONS • ABOUT ME: Hey it's me Natwar! On this channel I upload videos where I share my ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/CEC89Qhapep6ZWw7qZM6O1btQDdlr06TF5frZCvV5PY8wzomFzAWlKkIRoJ_uxPbove8cYagEd0=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/CEC89Qhapep6ZWw7qZM6O1btQDdlr06TF5frZCvV5PY8wzomFzAWlKkIRoJ_uxPbove8cYagEd0=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/CEC89Qhapep6ZWw7qZM6O1btQDdlr06TF5frZCvV5PY8wzomFzAWlKkIRoJ_uxPbove8cYagEd0=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "RANDOM IT SOLUTIONS",
                "liveBroadcastContent": "none",
                "publishTime": "2022-03-12T06:42:01Z"
            },
            "statistics": {
                "viewCount": "2263403",
                "subscriberCount": "13600",
                "hiddenSubscriberCount": false,
                "videoCount": "60"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "M36MmMqPOm5VteRWk2PsEyMY4ng",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UC3qOLCf8GL8_DSPsWiltpLw"
            },
            "snippet": {
                "publishedAt": "2020-02-13T17:36:42Z",
                "channelId": "UC3qOLCf8GL8_DSPsWiltpLw",
                "title": "random fs videos",
                "description": "Канал посвящен любительским записям выступлений фигуристки Александры Трусовой. По возможности выкладываю ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kgr_0Ux0LQWzfn3hA7BwZT1QgeKI4PN8-sEQ=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kgr_0Ux0LQWzfn3hA7BwZT1QgeKI4PN8-sEQ=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kgr_0Ux0LQWzfn3hA7BwZT1QgeKI4PN8-sEQ=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "random fs videos",
                "liveBroadcastContent": "none",
                "publishTime": "2020-02-13T17:36:42Z"
            },
            "statistics": {
                "viewCount": "90598559",
                "subscriberCount": "142000",
                "hiddenSubscriberCount": false,
                "videoCount": "736"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "AZPZRNe_2cHGE2T7Eu63MkxdRY0",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCpAFf91jjKXPsAdgEMXIp7g"
            },
            "snippet": {
                "publishedAt": "2019-09-30T00:15:19Z",
                "channelId": "UCpAFf91jjKXPsAdgEMXIp7g",
                "title": "Random Michael",
                "description": "Hey Im a random guy doing Youtube stuff and making videos to entertain people with my randomness.   For business inquiries ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/UU3TafVjNL6g1QwFiK5q2_CSg3vL5zEngDyOMhVW1EgE_6yrlbAFDDbQPb1cgWeO42Nt-Z9iqO8=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/UU3TafVjNL6g1QwFiK5q2_CSg3vL5zEngDyOMhVW1EgE_6yrlbAFDDbQPb1cgWeO42Nt-Z9iqO8=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/UU3TafVjNL6g1QwFiK5q2_CSg3vL5zEngDyOMhVW1EgE_6yrlbAFDDbQPb1cgWeO42Nt-Z9iqO8=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Michael",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2019-09-30T00:15:19Z"
            },
            "statistics": {
                "viewCount": "52537378",
                "subscriberCount": "59100",
                "hiddenSubscriberCount": false,
                "videoCount": "5079"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "oiL-0JGd-Q4HlNdN6_Nx__AxE3I",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCKO8CEXDcrTVGWNMpjynnIA"
            },
            "snippet": {
                "publishedAt": "2023-04-16T11:15:12Z",
                "channelId": "UCKO8CEXDcrTVGWNMpjynnIA",
                "title": "Random Guy",
                "description": "Subscribe or im your biggest enemy ツ Gaming content creator have fun!",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/d6gx_vv4731LlAy9Y9axG6TK_YFgBlQszGJz0Br9kanE8FkndtdUNaqCltFMKBY8zzwyu6vK6A=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/d6gx_vv4731LlAy9Y9axG6TK_YFgBlQszGJz0Br9kanE8FkndtdUNaqCltFMKBY8zzwyu6vK6A=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/d6gx_vv4731LlAy9Y9axG6TK_YFgBlQszGJz0Br9kanE8FkndtdUNaqCltFMKBY8zzwyu6vK6A=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Guy",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2023-04-16T11:15:12Z"
            },
            "statistics": {
                "viewCount": "466922",
                "subscriberCount": "1430",
                "hiddenSubscriberCount": false,
                "videoCount": "590"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "BrrfzeC9GDJQTg2MdVrCI-YNFRI",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCXx7J5Pl1DFQJQu9-2HWhpA"
            },
            "snippet": {
                "publishedAt": "2019-01-14T02:34:00Z",
                "channelId": "UCXx7J5Pl1DFQJQu9-2HWhpA",
                "title": "The Random Encounter",
                "description": "Video Game Channel that focus on all things gaming such as the latest news, emulation, accessories, and more! We also host a ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_msl0r1hWWss5e6xmtn4DSbM7_ARSlKI-EAcNE=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_msl0r1hWWss5e6xmtn4DSbM7_ARSlKI-EAcNE=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_msl0r1hWWss5e6xmtn4DSbM7_ARSlKI-EAcNE=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "The Random Encounter",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2019-01-14T02:34:00Z"
            },
            "statistics": {
                "viewCount": "130858",
                "subscriberCount": "772",
                "hiddenSubscriberCount": false,
                "videoCount": "470"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "XsOCzfAwTyZL39BegRwuWsuR5zM",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCnkoDRx43Y8JyvnmwbYS-3Q"
            },
            "snippet": {
                "publishedAt": "2017-07-16T20:10:56Z",
                "channelId": "UCnkoDRx43Y8JyvnmwbYS-3Q",
                "title": "Random Ness",
                "description": "Welcome to my channel with a good bunch of childhood songs. But don't worry soon we will be uploading songs from real artists, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mThmvdyUW3eJCW11hD73D9127wsdw7HRxq0kzU=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mThmvdyUW3eJCW11hD73D9127wsdw7HRxq0kzU=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_mThmvdyUW3eJCW11hD73D9127wsdw7HRxq0kzU=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Ness",
                "liveBroadcastContent": "none",
                "publishTime": "2017-07-16T20:10:56Z"
            },
            "statistics": {
                "viewCount": "14274230",
                "subscriberCount": "7520",
                "hiddenSubscriberCount": false,
                "videoCount": "833"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "y81HtctAOlPQy0WWgdSIwcdnUrU",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCa8oI2Y7dCbjwsh_zE2fRkA"
            },
            "snippet": {
                "publishedAt": "2007-06-25T21:17:18Z",
                "channelId": "UCa8oI2Y7dCbjwsh_zE2fRkA",
                "title": "Random Experiments - Experimente und Synthesen",
                "description": "Hier lade ich alle Experimente hoch, die ich in meiner Freizeit mache. Die meisten haben mit Chemie zu tun, manchmal aber ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kPoCUH9BGAeOXkljqbH9H4vEDULZ3XEh6TC8hw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kPoCUH9BGAeOXkljqbH9H4vEDULZ3XEh6TC8hw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_kPoCUH9BGAeOXkljqbH9H4vEDULZ3XEh6TC8hw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Experiments - Experimente und Synthesen",
                "liveBroadcastContent": "none",
                "publishTime": "2007-06-25T21:17:18Z"
            },
            "statistics": {
                "viewCount": "2212852",
                "subscriberCount": "6750",
                "hiddenSubscriberCount": false,
                "videoCount": "208"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "XTv6kEMHh6XmgWU4XKDp6zYnjx4",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UC-6vcjszQk4oNWjDRqsJ-Pg"
            },
            "snippet": {
                "publishedAt": "2019-01-22T05:07:48Z",
                "channelId": "UC-6vcjszQk4oNWjDRqsJ-Pg",
                "title": "Random JOURNEY Vlogs",
                "description": "Welcome to FOOD & TRAVEL VLOGS #STAY_TUNED বন্ধু-বান্ধবীরা - Random JOURNEY - আমাদের এই ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/enDMW4fiBaqs3zJFzKkvFzpAnQVKf0_b2vSKBx9-rulP3hRGBqh8eCWR02hW0MhWtRk6JQWKQCA=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/enDMW4fiBaqs3zJFzKkvFzpAnQVKf0_b2vSKBx9-rulP3hRGBqh8eCWR02hW0MhWtRk6JQWKQCA=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/enDMW4fiBaqs3zJFzKkvFzpAnQVKf0_b2vSKBx9-rulP3hRGBqh8eCWR02hW0MhWtRk6JQWKQCA=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random JOURNEY Vlogs",
                "liveBroadcastContent": "none",
                "publishTime": "2019-01-22T05:07:48Z"
            },
            "statistics": {
                "viewCount": "593567",
                "subscriberCount": "2300",
                "hiddenSubscriberCount": false,
                "videoCount": "588"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "lqHgFbEj0XpZFKlJT4ZgJYmdXOE",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCOtz03vUYpe1lwmI-w6WFXQ"
            },
            "snippet": {
                "publishedAt": "2012-06-08T21:51:29Z",
                "channelId": "UCOtz03vUYpe1lwmI-w6WFXQ",
                "title": "Random Gaming Zone",
                "description": "Hablamos de música, jugamos como mancos y así como dice el canal, subimos cosas random de vez en cuando.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lxyl7GmDia_nbn7jl7xcC9DDerW52u5ivpkiSFe-c=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lxyl7GmDia_nbn7jl7xcC9DDerW52u5ivpkiSFe-c=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/ytc/AIdro_lxyl7GmDia_nbn7jl7xcC9DDerW52u5ivpkiSFe-c=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "Random Gaming Zone",
                "liveBroadcastContent": "upcoming",
                "publishTime": "2012-06-08T21:51:29Z"
            },
            "statistics": {
                "viewCount": "78173",
                "subscriberCount": "516",
                "hiddenSubscriberCount": false,
                "videoCount": "720"
            }
        }
    ]);

    const handleSearch = async (event) => {
        try {

            const desiredNumberOfEntries = 100;

            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: 'snippet',
                    q: searchTerm,
                    type: 'channel',
                    maxResults: desiredNumberOfEntries,
                    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY, // Replace with your actual API key
                },
            });

            // Extract channel IDs from search results
            const channelIds = response.data.items.map(item => item.snippet.channelId).join(',');

            // Fetch channel statistics using the channel IDs
            const statsResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
                params: {
                    part: 'statistics',
                    id: channelIds,
                    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
                },
            });

            // Merge statistics data with search results
            const searchResultsWithStats = response.data.items.map(item => {
                const channelStats = statsResponse.data.items.find(channel => channel.id === item.snippet.channelId);
                return {
                    ...item,
                    statistics: channelStats ? channelStats.statistics : null,
                };
            });

            console.log(searchResultsWithStats);
            setSearchResults(searchResultsWithStats);
            toast.success('Success..');

        } catch (error) {
            console.error('Error fetching search results:', error.message);
            toast.error('Server Error!!');
            // Handle errors appropriately, e.g., display an error message to the user
        }
    };

    const session = useSession();
    console.log(session)

    const handleCollaborate = async (channelId) => {
        try {

            const requestBody = {
                channelId: channelId, // Destructure directly from the argument
                email: session.data.user.email,
            };

            // Send a POST request to your API route
            const requestBodyString = JSON.stringify(requestBody);
            console.log(requestBodyString)

            // Send a POST request to your API route
            const response = await axios.post('/api/setcollaborations', requestBodyString);

            const responseData = response.data;

            if (responseData.message === 'Collaboration created successfully!') {
                // Handle success scenario (e.g., display a success message)
                console.log('Collaboration created successfully!');
                toast.success('Collaboration Added..');
            } else if (responseData.message === 'Collaboration updated successfully!') {
                console.log('Collaboration updated successfully!');
                toast.success('Collaboration Updated..');
            } else if (responseData.message === 'Collaboration already Exists') {
                console.log('Collaboration already Exists');
                toast.success('Collaboration Already Exists..');
            } else {
                console.error('Error creating collaboration:', responseData.message);
                // Handle error scenario (e.g., display an error message)
                toast.error(responseData.message);
            }
        } catch (error) {
            console.error('Error submitting collaboration:', error.message);
            toast.error('Server Error');
            // Handle errors gracefully (e.g., display a generic error message)
        }
    };

    function formatSubscribersCount(subscribersCount) {
        if (subscribersCount >= 1000000000) {
            return (subscribersCount / 1000000000).toFixed(1) + 'B';
        } else if (subscribersCount >= 1000000) {
            return (subscribersCount / 1000000).toFixed(1) + 'M';
        } else if (subscribersCount >= 1000) {
            return (subscribersCount / 1000).toFixed(1) + 'K';
        } else {
            return subscribersCount.toString();
        }
    }

    const router = useRouter();
    const handleBack = () => {
        router.push("/editor");
    }

    return (
        <div className='h-screen'>
            <section className="flex gap-5 items-center justify-between mx-8 items-start px-6 pt-7 pb-10 bg-white max-md:flex-wrap max-md:px-5 ">
                <div className='flex flex-row'>
                    <button onClick={() => handleBack()}><svg className=" h-[37px] w-[37px]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></button>
                    <img className='h-[50px]' src="/Ytblend.png" alt="" />
                </div>

                <div className="flex gap-0 max-md:flex-wrap">
                    <input type='text' onChange={(event) => setSearchTerm(event.target.value)} className="rounded-l-3xl pl-3 shrink-0 max-w-full h-9 bg-white border border-black border-solid w-[569px]"></input>
                    <button onClick={(e) => handleSearch(e)} className="shrink-0 h-9 bg-white rounded-r-3xl border border-black border-solid w-[76px] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor" />
                        </svg>
                    </button>

                </div>
                <img src={session.data?.user.image} className="shrink-0 w-9 h-9 rounded-full" aria-label="Button"></img>
            </section>


            {searchResults.length > 0 && (
                <section className="px-6 py-3.5 bg-white max-md:pl-5">
                    {searchResults.map((result) => (
                        <div key={result.id.channelId} className="mx-60 mb-10 flex gap-5 max-md:flex-col max-md:gap-0">
                            {result.snippet.thumbnails && result.snippet.thumbnails.high && (
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
                                        <button onClick={() => handleCollaborate(result.id.channelId)} className='bg-black text-white px-3 rounded-full'>Collaborate</button>
                                    </div>
                                    <div className="shrink-0 mt-2.5 h-[73px] max-md:max-w-full">
                                        <div className='text-xs'> {formatSubscribersCount(result.statistics.subscriberCount) + " Subscribers"}  </div>
                                        <p>{result.snippet.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            )}


        </div>
    )
}
