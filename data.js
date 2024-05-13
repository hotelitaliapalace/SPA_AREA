var APP_DATA = {
  "scenes": [
    {
      "id": "0-area-spa",
      "name": "AREA SPA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7460110319613902,
          "pitch": 0.03780398573052324,
          "rotation": 0,
          "target": "1-relax-green-room"
        },
        {
          "yaw": -1.5613057238554866,
          "pitch": -0.03939304452619652,
          "rotation": 0,
          "target": "2-rooftop-pool"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.985847824144237,
          "pitch": 0.08496391741238796,
          "title": "TURKISH BATH",
          "text": "Text"
        },
        {
          "yaw": 2.008941461451987,
          "pitch": 0.01697532027305293,
          "title": "SAUNA",
          "text": "90°C"
        }
      ]
    },
    {
      "id": "1-relax-green-room",
      "name": "RELAX GREEN ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6900452181533447,
        "pitch": 0.02075290996863366,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": -2.2137869610343657,
          "pitch": 0.1751117815689831,
          "rotation": 0,
          "target": "0-area-spa"
        },
        {
          "yaw": 0.018756909786057818,
          "pitch": 0.207244060812652,
          "rotation": 0,
          "target": "2-rooftop-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-rooftop-pool",
      "name": "ROOFTOP POOL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.1890446671035129,
        "pitch": 0.12433744011569381,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.603993521311793,
          "pitch": 0.16158089798495645,
          "rotation": 0,
          "target": "0-area-spa"
        },
        {
          "yaw": -2.5860399321122287,
          "pitch": -0.27435492377739834,
          "rotation": 0,
          "target": "3-palestra-e-jacuzzi-esterno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-palestra-e-jacuzzi-esterno",
      "name": "PALESTRA E JACUZZI ESTERNO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2381016833082015,
        "pitch": 0.2696444297800831,
        "fov": 1.7272752521749126
      },
      "linkHotspots": [
        {
          "yaw": -2.5003699537035615,
          "pitch": 0.16921374362249608,
          "rotation": 0,
          "target": "0-area-spa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ZONA BENESSERE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
