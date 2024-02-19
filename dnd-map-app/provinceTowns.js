import { Circle as CircleStyle, Icon, Fill, Stroke, Style } from 'ol/style.js';
import MultiPoint from 'ol/geom/MultiPoint.js';
import Text from 'ol/style/Text';
import Static from 'ol/source/ImageStatic.js';

var city_coords2 = {
  Tovoit1: {
    Zanzibar: [3124.2003278056873, 953.5202838548739],
    Reykjavik: [3396.698570211951, 924.9848264342621],
    Ushuaia: [3192.873645363495, 1104.9778975738832],
    Nagasaki: [3115.73376456766, 1220.6876948436266],
    Ljubljana: [3374.1210044465206, 1147.9379055837398],
    Sucre: [3508.018323793764, 1088.3583191596708],
  },
  Tovoit2: {
    Hobart: [1560.9558777183868, 1243.3249907025092],
    Vladivostok: [1722.9394871009304, 1058.0315388193708],
    Mandalay: [1854.5017965344293, 1139.8135255442676],
    Windhoek: [2170.567375817442, 1084.8971251153716],
    Lahore: [2474.3854199317075, 1079.3659714494468],
    Cotonou: [2615.8247184330753, 1080.5561534830719],
    'Port Moresby': [2801.908352349839, 1143.3692693396742],
    Luanda: [2766.746080768494, 1015.3627037015818],
  },
  Tovoit4: {
    Tromsø: [2044.5417337381828, 1300.0555039142378],
    Tbilisi: [2224.144865108745, 1225.1100267796207],
    Valdivia: [2472.485031207872, 1272.1172255009092],
    Nouakchott: [2621.0456460452506, 1225.9969422899626],
    Chisinau: [1862.277788169278, 1621.5672484599813],
    Lilongwe: [1677.3530622356893, 1994.077463775014],
  },
  Tovoit3: {
    Gibraltar: [1414.7764018576488, 1528.1323236687726],
    Bishkek: [1373.5342216208996, 1860.2872573405689],
    Dushanbe: [1555.3546756009753, 1804.854192102741],
    Niamey: [1358.89987886465, 2010.5782623602899],
    Maputo: [1477.7483842680163, 2035.8992181641052],
    Asmara: [1597.9272629368954, 2098.427708985643],
    Nukualofa: [1711.0107498557215, 2194.659471329806],
    Tórshavn: [1558.9024053096587, 2238.5624995985554],
  },
  Tovoit5: {
    Apia: [2107.1058165699073, 1849.424155291551],
    Male: [2099.362257069473, 1736.7911875189432],
    Tashkent: [2153.566905034591, 1603.7434835960335],
    Libreville: [2350.674598636655, 1633.3096698608933],
  },
  Emdeeseyall: {
    Windhoek: [4584.124003821806, 936.1629482359468],
    Managua: [4896.486269720067, 1097.9138960188739],
    'Port-au-Prince': [4992.3876134315005, 1175.695668923377],
    Gaborone: [5240.758924271242, 1331.7011160096506],
    Thimphu: [5299.537121509407, 1415.2281112808073],
    Lilongwe: [5457.310308574664, 1545.6009072033376],
    Lome: [5773.740754999542, 1750.2199623549266],
    'Port Moresby': [5893.50692560204, 1879.7088714292258],
  },
  Ellarwylsunn: {
    Maseru: [4827.89969089183, 846.3344809343315],
    Praia: [4987.614202537197, 938.0562263765084],
    Djibouti: [5126.7939760873405, 894.2488292056923],
    Libreville: [5254.109216499245, 873.7141085179662],
    Windhoek: [5205.282227901095, 1131.0825799521351],
    Malabo: [5514.672033522166, 1053.50696846517],
    Honiara: [5653.395504316415, 1203.1822972558707],
    Apia: [5881.559032698374, 1363.3531116571346],
    Tórshavn: [5731.427435966774, 1414.0054157238594],
    Managua: [6114.74222213766, 1537.6700426061118],
    Lilongwe: [6016.631924777965, 1770.8532146378996],
  },
  Hauspytal: {
    Managua: [6224.146550091286, 2389.171502740348],
    Thimphu: [6354.460356102349, 2446.701557148961],
  },
  Divcalejj: {
    Managua: [6252.023282767697, 2011.9733452009634],
    Thimphu: [6365.400379127698, 2270.1866121582634],
    'Port-au-Prince': [6451.367628668901, 2395.7112600734094],
    Djibouti: [6512.728328057216, 2244.334131252794],
    Gaborone: [6499.957834889479, 2161.793108108249],
    Praia: [6399.974161427957, 2023.497978907215],
    Lilongwe: [6659.121840804146, 2373.5964882527423],
    Tórshavn: [6731.695631801314, 2335.9079503621233],
    Honiara: [6768.138262703049, 2331.235816976583],
    Tórshavn: [6760.974339103441, 2148.711120370516],
  },
  Stakt: {
    Praia: [6852.620525476353, 2446.1425196431474],
    Honiara: [7119.78794842711, 2301.8971572947517],
    Haikou: [7366.259261451553, 2204.0612622686385],
    Fuzhou: [7275.322045810202, 2352.069440599231],
    Djibouti: [7071.497144885756, 2497.5689951949953],
    Apia: [7513.640343658461, 2315.6945160642763],
    Cotonou: [7642.206819626189, 2350.815152655826],
    Thimphu: [7420.194552130305, 2445.515327823428],
    Mandalay: [7201.945124540623, 2550.2499979303393],
    Managua: [7109.126393250133, 2641.1872614197077],
    Honiara: [7950.766438505569, 2431.090777234183],
    Tórshavn: [8091.248889175732, 2554.639957884238],
    Tehran: [8010.346024929638, 2629.27133456529],
    Kochi: [7881.152452838225, 2544.6056064889817],
    Cebu: [7753.840264813903, 2607.948008895247],
    'Port Moresby': [7654.749986148348, 2474.9915251256025],
    Thimphu: [7439.009158369485, 2579.7260995364772],
    Djibouti: [7583.254472869862, 2686.342297254532],
    Yangon: [7436.500534634657, 2786.68686386349],
    Tórshavn: [7797.741012705322, 2723.344365761189],
    Mandalay: [7199.436500805795, 2862.5724327919115],
    Hainan: [7058.954109945654, 2937.2037137769275],
    Mumbai: [7028.22358881406, 3164.2333244385068],
    Managua: [6981.8142171878135, 3342.972035862696],
    Honiara: [7201.945148464631, 3329.1746770931713],
    Thimphu: [7248.9816640625795, 3392.5171751954726],
    Naga: [7592.35623085912, 2841.081815676042],
    Lilongwe: [7312.462304954331, 2705.2858480354002],
    Praia: [7191.491268864849, 2708.2508252972398],
  },
  Phoppise: {
    Thimphu: [7047.7693112373845, 3447.0200191210674],
    Djibouti: [7212.883163235958, 3541.8378230643375],
    Cotonou: [7351.295447008489, 3695.78065131937],
    Tehran: [7446.113292526636, 3686.244372498475],
  },
  Talleeho: {
    Tashkent: [7695.483938218596, 3523.5485937745916],
    Thimphu: [7780.989537658999, 3541.12913986994],
    Dushanbe: [7897.660523153987, 3506.7671523257995],
    Praia: [7948.00490846814, 3624.2373034351203],
    Maputo: [7852.110887654726, 3321.372008839201],
    Apia: [8108.627442104827, 3483.5927517690025],
    Maseru: [7916.040234863668, 3802.440383167157],
    Apia: [8104.631857904269, 3759.288061607566],
    Tórshavn: [8206.119672211355, 3681.7737525038337],
    Honiara: [8299.616318117321, 3863.9723554686534],
    Cotonou: [8439.461765136883, 3770.475709562686],
    Ljubljana: [8552.936332045643, 3846.391809373305],
    Maseru: [8444.256514951774, 3956.669927211952],
    Lilongwe: [8647.232265501498, 3999.8222335295995],
    Praia: [8691.183691707645, 3742.506620158774],
    Apia: [8853.404312701892, 3986.2372563928657],
    Windhoek: [9042.795101356827, 3752.0960283368927],
    Managua: [9308.101745951273, 3940.687590409717],
    Maseru: [8815.046801924971, 3642.6170151448014],
    Thimphu: [9180.243051533389, 3418.864299913504],
    Dushanbe: [9113.11728573822, 3227.875240997681],
    Mogadishu: [9218.600806181417, 3187.9194599598686],
    Managua: [9333.673582383293, 3238.2639062417975],
    Bloemfontein: [9332.075251154627, 3139.1734058743823],
    Tashkent: [9463.92952977307, 3254.2462430440332],
    Tokyo: [162.24339818857763, 3814.1332244772498],
    Djibouti: [1399.706126583662, 4363.563439018715],
    'Port-au-Prince': [2264.3072112489795, 4007.6865992128223],
    Santiago: [9559.323244964236, 4128.759466454392],
    Calgary: [7927.613830478575, 3438.2159647725557],
    Vancouver: [8151.596919431296, 3794.493158896177],
    Prairie: [8075.626047154935, 3692.3254341107267],
    Victoria: [8100.513057038566, 3514.186837048917],
    Chester: [7917.135089474936, 3514.1868370489187],
    Hamburg: [8320.104335365424, 3644.956046250383],
    Hanover: [8315.03320613945, 3570.429751966447],
    Lubeck: [8687.418345793782, 3610.5356038768687],
  },
  Fairweather: {
    'New York': [7755.618778258833, 2954.4389200598707],
    Thimphu: [7855.932501754416, 3129.7239868975084],
    Luanda: [7875.643292597656, 3057.2165192646507],
    Aceh: [8066.767343674524, 3292.33783680459],
    Tashkent: [8089.997914760658, 3097.6939920579316],
    Banda: [8177.640421325685, 3190.2642097606645],
    London: [8200.870992411821, 3014.9791429230286],
    Praia: [8169.192970225775, 2851.661334281989],
    Thimphu: [8250.71018217207, 2841.8765885156886],
    Nouakchott: [8438.856244563865, 2947.238402594302],
    Libreville: [8403.108511848632, 3058.244560266255],
    Tórshavn: [8302.763945239674, 3117.1970027186217],
    Apia: [8259.490341319957, 3279.6297794864768],
    Dushanbe: [8164.790166152356, 3428.8922696844825],
    Ljubljana: [8458.298042622766, 3506.6593662240466],
  },
  Grainengret: {
    Kunming: [8226.49870520744, 2701.8090397718893],
    Chongjin: [8229.188320060653, 2590.8624976147144],
    Kolhapur: [8349.100239361842, 2672.2233020366825],
    'Port-au-Prince': [8343.272747638253, 2798.4109750786215],
    Libreville: [8458.029585341694, 2758.2909089391383],
    Cotonou: [8587.355152354112, 2906.2195976151734],
    Windhoek: [8681.26746425758, 3033.9762561175744],
    Dushanbe: [8587.803414371274, 3079.475543413436],
    Cotonou: [8742.007908088353, 3187.508324746229],
    Santiago: [8828.971022911548, 3166.5173778428566],
    Praia: [8465.551466172816, 3254.377050900572],
    Libreville: [8577.372868246272, 3285.1279547521212],
    'Port-au-Prince': [8635.679766559704, 3398.5468115204094],
    Cotonou: [8811.798438262702, 3431.294495654356],
    Toronto: [8800.616316336702, 3370.192074476651],
    'Port Moresby': [8916.83069596926, 3256.7732177083626],
  },
  Twellvatey: {
    Managua: [7054.526011340108, 1928.8187806018109],
    Thimphu: [7199.92481624761, 1809.936446271327],
    Dushanbe: [7251.190084857617, 1969.0354720383002],
  },
  'Baust-Onpeetza': {
    Managua: [7011.90081139839, 1518.8468876386012],
    Tashkent: [7227.61553308821, 1475.387870487187],
    Honiara: [7359.5728883249785, 1240.7091416987155],
    'Port-au-Prince': [7541.31059641271, 1033.6862113822326],
    Honiara: [7364.313920242003, 1010.7713845425442],
    Tórshavn: [7229.986049046724, 1102.4304507623979],
    Lianyungang: [6992.146712693202, 1135.617372757949],
    Praia: [7602.970685101967, 1297.4984230495727],
  },
  Tuhiniiz: {
    Bissau: [6280.983019046769, 918.8869773554809],
    Praia: [6472.992852432727, 738.729573050274],
    Thimphu: [6662.632230144896, 910.9853378734056],
    Magadan: [6899.681414607156, 787.7197137252508],
    Anadyr: [7026.107646320361, 580.6967834087679],
    Honiara: [7177.819100262317, 811.4245718867517],
  },
  Wuendiiz: {
    Managua: [6323.500893279708, 1402.9536802041116],
    Cotonou: [6398.132174264724, 1630.610386989375],
    Tórshavn: [6627.670360813113, 1809.3491701855912],
    Dushanbe: [6676.5883561741875, 1548.453282647894],
    Praia: [6633.941896226173, 1272.5056766252403],
    Santiago: [6530.461561910684, 1109.445755885683],
  },
  "Boer D'wok": {
    Tashkent: [7552.650847458357, 2221.6245564345413],
    Thimphu: [7464.11758458527, 2089.167815575023],
    Tashkent: [7436.665413298166, 1783.0761031057593],
    Managua: [7617.1634604552255, 1553.850514747122],
  },
  Senchro: {
    Reykjavik: [85.83212602991703, 3241.0280183007144],
    Thimphu: [357.5026099232137, 3274.100981907085],
    'Kuwait City': [586.6507388573003, 3417.41697730154],
    Djibouti: [582.7134855763788, 3352.0586088848736],
    Lilongwe: [887.4569255663316, 3559.158095414713],
    Tashkent: [896.1188707688154, 3411.1174080986957],
    Bissau: [1003.999586634977, 3247.3276475812754],
    Apia: [1213.4615092421736, 3265.439036704601],
    Tórshavn: [1227.6356450845778, 2971.7198578390544],
    'Port-au-Prince': [1155.4865686142716, 2826.158021510638],
    Manama: [1409.8331545928859, 2784.4231727795004],
  },
  Sarhania: {
    Lilongwe: [2617.0543631378328, 2869.0797817298976],
    Manama: [2794.2988546825186, 2678.4583275691425],
    'Port-au-Prince': [2772.9793573895768, 2526.295620996387],
  },
  'Disputed Caraquet': {
    Caraquet: [3748.0801599041947, 3067.8133843880732],
    Tashkent: [4793.057649757538, 3259.0272141164824],
    Tórshavn: [4888.055603380569, 3330.884640574929],
    Lilongwe: [4952.605494944936, 3452.6768888095844],
  },
};

// Divcalejj: {
//     Managua: [6252.023282767697, 2011.9733452009634],
//     Thimphu: [6365.400379127698, 2270.1866121582634],
//     'Port-au-Prince': [6451.367628668901, 2395.7112600734094],
//     Djibouti: [6512.728328057216, 2244.334131252794],
//     Gaborone: [6499.957834889479, 2161.793108108249],
//     Praia: [6399.974161427957, 2023.497978907215],
//     Lilongwe: [6659.121840804146, 2373.5964882527423],
//     Tórshavn: [6731.695631801314, 2335.9079503621233],
//     Honiara: [6768.138262703049, 2331.235816976583],
//     Tórshavn: [6760.974339103441, 2148.711120370516],
//   },

export const townGJs = {
  type: 'FeatureCollection',
  features: [
    //Divcalejj
    {
      type: 'Feature',
      properties: { name: 'Reishahr' },
      geometry: {
        type: 'Point',
        coordinates: [6852.620525476353, 2446.1425196431474],
      },
    },
    //Stakt
    {
      type: 'Feature',
      properties: { name: 'Reishahr' },
      geometry: {
        type: 'Point',
        coordinates: [6852.620525476353, 2446.1425196431474],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Shabaran' },
      geometry: {
        type: 'Point',
        coordinates: [7119.78794842711, 2301.8971572947517],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Sirjan' },
      geometry: {
        type: 'Point',
        coordinates: [7366.259261451553, 2204.0612622686385],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Zanjan' },
      geometry: {
        type: 'Point',
        coordinates: [7275.322045810202, 2352.069440599231],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Valashabad' },
      geometry: {
        type: 'Point',
        coordinates: [7071.497144885756, 2497.5689951949953],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Izadkhast' },
      geometry: {
        type: 'Point',
        coordinates: [7513.640343658461, 2315.6945160642763],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Shapur' },
      geometry: {
        type: 'Point',
        coordinates: [7642.206819626189, 2350.815152655826],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Eranshahr' },
      geometry: {
        type: 'Point',
        coordinates: [7420.194552130305, 2445.515327823428],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Ledan' },
      geometry: {
        type: 'Point',
        coordinates: [7201.945124540623, 2550.2499979303393],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Karka' },
      geometry: {
        type: 'Point',
        coordinates: [7109.126393250133, 2641.1872614197077],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Veh-Ardashir' },
      geometry: {
        type: 'Point',
        coordinates: [7950.766438505569, 2431.090777234183],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tammisha' },
      geometry: {
        type: 'Point',
        coordinates: [8091.248889175732, 2554.639957884238],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Gonabad' },
      geometry: {
        type: 'Point',
        coordinates: [8010.346024929638, 2629.27133456529],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Hatra' },
      geometry: {
        type: 'Point',
        coordinates: [7881.152452838225, 2544.6056064889817],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Hulwan' },
      geometry: {
        type: 'Point',
        coordinates: [7753.840264813903, 2607.948008895247],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Fahraj' },
      geometry: {
        type: 'Point',
        coordinates: [7654.749986148348, 2474.9915251256025],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Damavand' },
      geometry: {
        type: 'Point',
        coordinates: [7439.009158369485, 2579.7260995364772],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Abiward' },
      geometry: {
        type: 'Point',
        coordinates: [7583.254472869862, 2686.342297254532],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Abruwan' },
      geometry: {
        type: 'Point',
        coordinates: [7436.500534634657, 2786.68686386349],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Mahan' },
      geometry: {
        type: 'Point',
        coordinates: [7797.741012705322, 2723.344365761189],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Abar-Kavad' },
      geometry: {
        type: 'Point',
        coordinates: [7199.436500805795, 2862.5724327919115],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Merv' },
      geometry: {
        type: 'Point',
        coordinates: [7058.954109945654, 2937.2037137769275],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Bezabde' },
      geometry: {
        type: 'Point',
        coordinates: [7028.22358881406, 3164.2333244385068],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Dastagird' },
      geometry: {
        type: 'Point',
        coordinates: [6981.8142171878135, 3342.972035862696],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Ganzak' },
      geometry: {
        type: 'Point',
        coordinates: [7201.945148464631, 3329.1746770931713],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Istakhr' },
      geometry: {
        type: 'Point',
        coordinates: [7248.9816640625795, 3392.5171751954726],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Kashmar' },
      geometry: {
        type: 'Point',
        coordinates: [7592.35623085912, 2841.081815676042],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tawwaj' },
      geometry: {
        type: 'Point',
        coordinates: [7312.462304954331, 2705.2858480354002],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Derbent' },
      geometry: {
        type: 'Point',
        coordinates: [7191.491268864849, 2708.2508252972398],
      },
    },
    // Phoppise
    {
      type: 'Feature',
      properties: { name: 'Bostra' },
      geometry: {
        type: 'Point',
        coordinates: [7047.7693112373845, 3447.0200191210674],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Gerasa' },
      geometry: {
        type: 'Point',
        coordinates: [7212.883163235958, 3541.8378230643375],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Aelana' },
      geometry: {
        type: 'Point',
        coordinates: [7351.295447008489, 3695.78065131937],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Petra' },
      geometry: {
        type: 'Point',
        coordinates: [7446.113292526636, 3686.244372498475],
      },
    },
    //Talleeho
    {
      type: 'Feature',
      properties: { name: 'Sulcis' },
      geometry: {
        type: 'Point',
        coordinates: [7695.483938218596, 3523.5485937745916],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Thapsus' },
      geometry: {
        type: 'Point',
        coordinates: [7780.989537658999, 3541.12913986994],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Leptis Parva' },
      geometry: {
        type: 'Point',
        coordinates: [7897.660523153987, 3506.7671523257995],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Utica' },
      geometry: {
        type: 'Point',
        coordinates: [7948.00490846814, 3624.2373034351203],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Agadir' },
      geometry: {
        type: 'Point',
        coordinates: [7852.110887654726, 3321.372008839201],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Melitta' },
      geometry: {
        type: 'Point',
        coordinates: [8108.627442104827, 3483.5927517690025],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tharros' },
      geometry: {
        type: 'Point',
        coordinates: [7916.040234863668, 3802.440383167157],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Mogoura' },
      geometry: {
        type: 'Point',
        coordinates: [8104.631857904269, 3759.288061607566],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Lixus' },
      geometry: {
        type: 'Point',
        coordinates: [8206.119672211355, 3681.7737525038337],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Leptis Magna' },
      geometry: {
        type: 'Point',
        coordinates: [8299.616318117321, 3863.9723554686534],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Sabratha' },
      geometry: {
        type: 'Point',
        coordinates: [8439.461765136883, 3770.475709562686],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Oea' },
      geometry: {
        type: 'Point',
        coordinates: [8552.936332045643, 3846.391809373305],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tipasa' },
      geometry: {
        type: 'Point',
        coordinates: [8444.256514951774, 3956.669927211952],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Russicada' },
      geometry: {
        type: 'Point',
        coordinates: [8647.232265501498, 3999.8222335295995],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Gades' },
      geometry: {
        type: 'Point',
        coordinates: [8691.183691707645, 3742.506620158774],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Lapithus' },
      geometry: {
        type: 'Point',
        coordinates: [8853.404312701892, 3986.2372563928657],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tamasys' },
      geometry: {
        type: 'Point',
        coordinates: [9042.795101356827, 3752.0960283368927],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Kittium' },
      geometry: {
        type: 'Point',
        coordinates: [9308.101745951273, 3940.687590409717],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Phoenicus' },
      geometry: {
        type: 'Point',
        coordinates: [8815.046801924971, 3642.6170151448014],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Baria' },
      geometry: {
        type: 'Point',
        coordinates: [9180.243051533389, 3418.864299913504],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Pyrgos' },
      geometry: {
        type: 'Point',
        coordinates: [9113.11728573822, 3227.875240997681],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Mevorakh' },
      geometry: {
        type: 'Point',
        coordinates: [9218.600806181417, 3187.9194599598686],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Arsuf' },
      geometry: {
        type: 'Point',
        coordinates: [9333.673582383293, 3238.2639062417975],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Kabri' },
      geometry: {
        type: 'Point',
        coordinates: [9332.075251154627, 3139.1734058743823],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Belus' },
      geometry: {
        type: 'Point',
        coordinates: [9463.92952977307, 3254.2462430440332],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tartus' },
      geometry: {
        type: 'Point',
        coordinates: [162.24339818857763, 3814.1332244772498],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Amrit' },
      geometry: {
        type: 'Point',
        coordinates: [1399.706126583662, 4363.563439018715],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Latakia' },
      geometry: {
        type: 'Point',
        coordinates: [2264.3072112489795, 4007.6865992128223],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Ramitha' },
      geometry: {
        type: 'Point',
        coordinates: [9559.323244964236, 4128.759466454392],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Ugarit' },
      geometry: {
        type: 'Point',
        coordinates: [7927.613830478575, 3438.2159647725557],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Sarepta' },
      geometry: {
        type: 'Point',
        coordinates: [8151.596919431296, 3794.493158896177],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Botrys' },
      geometry: {
        type: 'Point',
        coordinates: [8075.626047154935, 3692.3254341107267],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Baalbek' },
      geometry: {
        type: 'Point',
        coordinates: [8100.513057038566, 3514.186837048917],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Leptis Gebal' },
      geometry: {
        type: 'Point',
        coordinates: [7917.135089474936, 3514.1868370489187],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tyre' },
      geometry: {
        type: 'Point',
        coordinates: [8320.104335365424, 3644.956046250383],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Arqa' },
      geometry: {
        type: 'Point',
        coordinates: [8315.03320613945, 3570.429751966447],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Sydon' },
      geometry: {
        type: 'Point',
        coordinates: [8687.418345793782, 3610.5356038768687],
      },
    },
    //Fairweather
    {
      type: 'Feature',
      properties: { name: 'Monschau' },
      geometry: {
        type: 'Point',
        coordinates: [7755.618778258833, 2954.4389200598707],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Cosham' },
      geometry: {
        type: 'Point',
        coordinates: [7855.932501754416, 3129.7239868975084],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Siscia' },
      geometry: {
        type: 'Point',
        coordinates: [7875.643292597656, 3057.2165192646507],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Wismar' },
      geometry: {
        type: 'Point',
        coordinates: [8066.767343674524, 3292.33783680459],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Erfurti' },
      geometry: {
        type: 'Point',
        coordinates: [8089.997914760658, 3097.6939920579316],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Fleury' },
      geometry: {
        type: 'Point',
        coordinates: [8177.640421325685, 3190.2642097606645],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Bourges' },
      geometry: {
        type: 'Point',
        coordinates: [8200.870992411821, 3014.9791429230286],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tournai' },
      geometry: {
        type: 'Point',
        coordinates: [8169.192970225775, 2851.661334281989],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Cambrai' },
      geometry: {
        type: 'Point',
        coordinates: [8250.71018217207, 2841.8765885156886],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Stralsun' },
      geometry: {
        type: 'Point',
        coordinates: [8438.856244563865, 2947.238402594302],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Rennes' },
      geometry: {
        type: 'Point',
        coordinates: [8403.108511848632, 3058.244560266255],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Vannes' },
      geometry: {
        type: 'Point',
        coordinates: [8302.763945239674, 3117.1970027186217],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Nantes' },
      geometry: {
        type: 'Point',
        coordinates: [8259.490341319957, 3279.6297794864768],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Limoges' },
      geometry: {
        type: 'Point',
        coordinates: [8164.790166152356, 3428.8922696844825],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Arles' },
      geometry: {
        type: 'Point',
        coordinates: [8458.298042622766, 3506.6593662240466],
      },
    },
    //Grainengret
    {
      type: 'Feature',
      properties: { name: 'Vindobona' },
      geometry: {
        type: 'Point',
        coordinates: [8226.49870520744, 2701.8090397718893],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Salonae' },
      geometry: {
        type: 'Point',
        coordinates: [8229.188320060653, 2590.8624976147144],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Aquileia' },
      geometry: {
        type: 'Point',
        coordinates: [8349.100239361842, 2672.2233020366825],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Cremona' },
      geometry: {
        type: 'Point',
        coordinates: [8343.272747638253, 2798.4109750786215],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Narbo' },
      geometry: {
        type: 'Point',
        coordinates: [8458.029585341694, 2758.2909089391383],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Aleria' },
      geometry: {
        type: 'Point',
        coordinates: [8587.355152354112, 2906.2195976151734],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Massilia' },
      geometry: {
        type: 'Point',
        coordinates: [8681.26746425758, 3033.9762561175744],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Arretium' },
      geometry: {
        type: 'Point',
        coordinates: [8587.803414371274, 3079.475543413436],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Felsina' },
      geometry: {
        type: 'Point',
        coordinates: [8742.007908088353, 3187.508324746229],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Perusi' },
      geometry: {
        type: 'Point',
        coordinates: [8828.971022911548, 3166.5173778428566],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Volteri' },
      geometry: {
        type: 'Point',
        coordinates: [8465.551466172816, 3254.377050900572],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Volsini' },
      geometry: {
        type: 'Point',
        coordinates: [8577.372868246272, 3285.1279547521212],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tarquini' },
      geometry: {
        type: 'Point',
        coordinates: [8635.679766559704, 3398.5468115204094],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tares' },
      geometry: {
        type: 'Point',
        coordinates: [8811.798438262702, 3431.294495654356],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Croton' },
      geometry: {
        type: 'Point',
        coordinates: [8800.616316336702, 3370.192074476651],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Rhegium' },
      geometry: {
        type: 'Point',
        coordinates: [8916.83069596926, 3256.7732177083626],
      },
    },
    //Twellvatey
    {
      type: 'Feature',
      properties: { name: 'Teoton' },
      geometry: {
        type: 'Point',
        coordinates: [7054.526011340108, 1928.8187806018109],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Kuhikugu' },
      geometry: {
        type: 'Point',
        coordinates: [7199.92481624761, 1809.936446271327],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Hatahara' },
      geometry: {
        type: 'Point',
        coordinates: [7251.190084857617, 1969.0354720383002],
      },
    },
    //Baust-Onpeetza
    {
      type: 'Feature',
      properties: { name: 'Bukhara' },
      geometry: {
        type: 'Point',
        coordinates: [7011.90081139839, 1518.8468876386012],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Khiva' },
      geometry: {
        type: 'Point',
        coordinates: [7227.61553308821, 1475.387870487187],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Ashgabat' },
      geometry: {
        type: 'Point',
        coordinates: [7359.5728883249785, 1240.7091416987155],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Merv' },
      geometry: {
        type: 'Point',
        coordinates: [7541.31059641271, 1033.6862113822326],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Astana' },
      geometry: {
        type: 'Point',
        coordinates: [7364.313920242003, 1010.7713845425442],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Dushanbe' },
      geometry: {
        type: 'Point',
        coordinates: [7229.986049046724, 1102.4304507623979],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Shah-Risabz' },
      geometry: {
        type: 'Point',
        coordinates: [6992.146712693202, 1135.617372757949],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Darvaza' },
      geometry: {
        type: 'Point',
        coordinates: [7602.970685101967, 1297.4984230495727],
      },
    },
    //Tuhiniiz
    {
      type: 'Feature',
      properties: { name: 'Urgench' },
      geometry: {
        type: 'Point',
        coordinates: [6280.983019046769, 918.8869773554809],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tobol' },
      geometry: {
        type: 'Point',
        coordinates: [6472.992852432727, 738.729573050274],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tver' },
      geometry: {
        type: 'Point',
        coordinates: [6662.632230144896, 910.9853378734056],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Pskov' },
      geometry: {
        type: 'Point',
        coordinates: [6899.681414607156, 787.7197137252508],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'New Sarai' },
      geometry: {
        type: 'Point',
        coordinates: [7026.107646320361, 580.6967834087679],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Old Sarai' },
      geometry: {
        type: 'Point',
        coordinates: [7177.819100262317, 811.4245718867517],
      },
    },
    //Wuendiiz
    {
      type: 'Feature',
      properties: { name: 'Itil' },
      geometry: {
        type: 'Point',
        coordinates: [6323.500893279708, 1402.9536802041116],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Suzdai' },
      geometry: {
        type: 'Point',
        coordinates: [6398.132174264724, 1630.610386989375],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Chemigov' },
      geometry: {
        type: 'Point',
        coordinates: [6627.670360813113, 1809.3491701855912],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Ryazan' },
      geometry: {
        type: 'Point',
        coordinates: [6676.5883561741875, 1548.453282647894],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Azov' },
      geometry: {
        type: 'Point',
        coordinates: [6633.941896226173, 1272.5056766252403],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Kaffa' },
      geometry: {
        type: 'Point',
        coordinates: [6530.461561910684, 1109.445755885683],
      },
    },
    //Boer D'wok
    {
      type: 'Feature',
      properties: { name: 'Dura' },
      geometry: {
        type: 'Point',
        coordinates: [7617.1634604552255, 1553.850514747122],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Arbela' },
      geometry: {
        type: 'Point',
        coordinates: [7436.665413298166, 1783.0761031057593],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Hatra' },
      geometry: {
        type: 'Point',
        coordinates: [7464.11758458527, 2089.167815575023],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Rhagae' },
      geometry: {
        type: 'Point',
        coordinates: [7552.650847458357, 2221.6245564345413],
      },
    },
    //Senchro
    {
      type: 'Feature',
      properties: { name: 'Kanesh' },
      geometry: {
        type: 'Point',
        coordinates: [85.83212602991703, 3241.0280183007144],
      },
    },
    {
      type: 'Feature',
      properties: { name: "Sam'al" },
      geometry: {
        type: 'Point',
        coordinates: [357.5026099232137, 3274.100981907085],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Hattusa' },
      geometry: {
        type: 'Point',
        coordinates: [586.6507388573003, 3417.41697730154],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Malatya' },
      geometry: {
        type: 'Point',
        coordinates: [582.7134855763788, 3352.0586088848736],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Emar' },
      geometry: {
        type: 'Point',
        coordinates: [887.4569255663316, 3559.158095414713],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Qadesh' },
      geometry: {
        type: 'Point',
        coordinates: [896.1188707688154, 3411.1174080986957],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Qatna' },
      geometry: {
        type: 'Point',
        coordinates: [1003.999586634977, 3247.3276475812754],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Nerik' },
      geometry: {
        type: 'Point',
        coordinates: [1213.4615092421736, 3265.439036704601],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Ugarit' },
      geometry: {
        type: 'Point',
        coordinates: [1227.6356450845778, 2971.7198578390544],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Kusara' },
      geometry: {
        type: 'Point',
        coordinates: [1155.4865686142716, 2826.158021510638],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Borset' },
      geometry: {
        type: 'Point',
        coordinates: [1409.8331545928859, 2784.4231727795004],
      },
    },
    //Tovoit1
    {
      type: 'Feature',
      properties: { name: 'Fishhaven' },
      geometry: {
        type: 'Point',
        coordinates: [2617.0543631378328, 2869.0797817298976],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Fishburg' },
      geometry: {
        type: 'Point',
        coordinates: [2794.2988546825186, 2678.4583275691425],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Fishton' },
      geometry: {
        type: 'Point',
        coordinates: [2772.9793573895768, 2526.295620996387],
      },
    },
    //Tovoit1
    {
      type: 'Feature',
      properties: { name: 'Uyandi' },
      geometry: {
        type: 'Point',
        coordinates: [3124.2003278056873, 953.5202838548739],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Shaltis' },
      geometry: {
        type: 'Point',
        coordinates: [3396.698570211951, 924.9848264342621],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Dutast' },
      geometry: {
        type: 'Point',
        coordinates: [3115.73376456766, 1220.6876948436266],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Sailyk' },
      geometry: {
        type: 'Point',
        coordinates: [3374.1210044465206, 1147.9379055837398],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Osokhtokh' },
      geometry: {
        type: 'Point',
        coordinates: [3192.873645363495, 1104.9778975738832],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Namy' },
      geometry: {
        type: 'Point',
        coordinates: [3508.018323793764, 1088.3583191596708],
      },
    },
    //Disputed Caraquet
    {
      type: 'Feature',
      properties: { name: 'Torchavenne' },
      geometry: {
        type: 'Point',
        coordinates: [3748.0801599041947, 3067.8133843880732],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Lameque' },
      geometry: {
        type: 'Point',
        coordinates: [4793.057649757538, 3259.0272141164824],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Caraquet' },
      geometry: {
        type: 'Point',
        coordinates: [4888.055603380569, 3330.884640574929],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Tracadie' },
      geometry: {
        type: 'Point',
        coordinates: [4952.605494944936, 3452.6768888095844],
      },
    },
  ],
};

export function townStyles(feature, resolution) {
  return [
    new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({
          color: 'white',
        }),
        stroke: new Stroke({
          color: 'black',
          width: 2,
        }),
      }),
      text: new Text({
        text: feature.get('name'),
        font: 'bold 15px Calibri,sans-serif',
        fill: new Fill({
          color: 'black',
        }),
        overflow: true,
        offsetX: 0,
        offsetY: 15,
        stroke: new Stroke({
          color: 'white',
          width: 2,
        }),
      }),
    }),
  ];
}
