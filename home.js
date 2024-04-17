const translations = {
  "2251950": {
    "English": "INFO",
    "Spanish": "INFO",
    "Chinese": "信息"
  },
  "2255103": {
    "English": "Home",
    "Spanish": "Inicio.",
    "Chinese": "首页。"
  },
  "2424563": {
    "English": "News",
    "Spanish": "noticias",
    "Chinese": "新闻"
  },
  "20897285": {
    "English": "Resources",
    "Spanish": "Recursos recursos",
    "Chinese": "资源"
  },
  "175337227": {
    "English": "Saturday: 11am - 1:30pm",
    "Spanish": "Sábado: 11:00h - 13:30h",
    "Chinese": "星期六:上午11时至下午1时30分"
  },
  "286281313": {
    "English": "Client Portal",
    "Spanish": "Portal del cliente",
    "Chinese": "客户门户网站"
  },
  "307680236": {
    "English": "We offer in-person drop-in services (no appointment needed!). We also offer medical and counseling appointments over the phone.",
    "Spanish": "Ofrecemos servicios de entrega en persona (sin cita necesaria!). También ofrecemos citas médicas y de asesoramiento por teléfono.",
    "Chinese": "我们提供上门服务(不需要预约!)我们还通过电话提供医疗和咨询预约。"
  },
  "329871090": {
    "English": "Our Services",
    "Spanish": "Nuestros servicios",
    "Chinese": "我们的服务"
  },
  "823648551": {
    "English": "Phone: (510) 548-2570",
    "Spanish": "Teléfono: (510) 548-2570",
    "Chinese": "电话:(510)548-2570"
  },
  "947190653": {
    "English": "Fax: (510) 548-1730",
    "Spanish": "Fax: (510) 548-1730",
    "Chinese": "传真:(510)548-1730"
  },
  "980620239": {
    "English": "2339 Durant Avenue",
    "Spanish": "2339 Durant Avenue",
    "Chinese": "杜兰特大道2339号"
  },
  "983407375": {
    "English": "CHARGED FOR CLINIC SERVICES",
    "Spanish": "Se cobra por los servicios de la clínica",
    "Chinese": "诊所服务收费"
  },
  "1105570406": {
    "English": "CLINIC SECTIONS",
    "Spanish": "Secciones de clínica",
    "Chinese": "诊所的部分"
  },
  "1143124241": {
    "English": "Get Involved",
    "Spanish": "participar",
    "Chinese": "参与"
  },
  "1245118620": {
    "English": "YEARS SERVING THE COMMUNITY",
    "Spanish": "Años al servicio de la comunidad",
    "Chinese": "服务社会的年数"
  },
  "1323032028": {
    "English": "The Berkeley Free Clinic is made up of 13 sections which each provide distinct services.",
    "Spanish": "La clínica libre de Berkeley se compone de 13 secciones que cada una proporciona servicios distintos.",
    "Chinese": "伯克利免费诊所由13个部门组成，每个部门提供不同的服务。"
  },
  "1434532422": {
    "English": "Client Care",
    "Spanish": "Atención al cliente",
    "Chinese": "客户关怀"
  },
  "1443853438": {
    "English": "Services",
    "Spanish": "servicios",
    "Chinese": "服务"
  },
  "1592554052": {
    "English": "Former Chief of Prevention at the City of Berkeley Public Health Division",
    "Spanish": "Ex jefe de prevención de la división de salud pública de la ciudad de Berkeley",
    "Chinese": "伯克利市公共卫生部门的前预防主任"
  },
  "1668830252": {
    "English": "List of Current Services",
    "Spanish": "Lista de servicios actuales",
    "Chinese": "现时服务一览表"
  },
  "1669334218": {
    "English": "CONNECT",
    "Spanish": "conectar",
    "Chinese": "连接"
  },
  "1683946577": {
    "English": "About Us",
    "Spanish": "Sobre nosotros",
    "Chinese": "关于我们"
  },
  "1750921308": {
    "English": "© 2024 Berkeley Free Clinic",
    "Spanish": "£2024 Berkeley Free Clinic (en inglés)",
    "Chinese": "©2024伯克利自由诊所"
  },
  "1925345846": {
    "English": "ACTION",
    "Spanish": "acción",
    "Chinese": "行动"
  },
  "2026959717": {
    "English": "Current Services",
    "Spanish": "Servicios actuales",
    "Chinese": "当前的服务"
  },
  "2052667023": {
    "English": "Donate",
    "Spanish": "donar",
    "Chinese": "捐赠"
  },
  "2056044339": {
    "English": "info@berkeleyfreeclinic.org",
    "Spanish": "info@berkeleyfreeclinic.org",
    "Chinese": "info@berkeleyfreeclinic.org"
  },
  "-520347149": {
    "English": "Berkeley Free Clinic",
    "Spanish": "Berkeley Free Clinic (en inglés)",
    "Chinese": "伯克利免费诊所"
  },
  "-1132679626": {
    "English": "Monday to Friday: 6pm - 8:30pm",
    "Spanish": "De lunes a viernes de 18:00 a 20:30 hs",
    "Chinese": "星期一至五:下午六时至八时三十分"
  },
  "-200818025": {
    "English": "Sunday: 4:30pm - 7pm",
    "Spanish": "Domingo: 4:30pm - 7pm",
    "Chinese": "星期日:下午四时三十分至七时"
  },
  "-1954110094": {
    "English": "Healthcare for people. Not profit.",
    "Spanish": "Salud para las personas. Sin fines de lucro.",
    "Chinese": "人们的医疗保健。没有利润。"
  },
  "-58653273": {
    "English": "Standards of Client Care",
    "Spanish": "Normas de atención al cliente",
    "Chinese": "客户服务标准"
  },
  "-87996973": {
    "English": "BERKELEY FREE CLINIC",
    "Spanish": "BERKELEY FREE CLINIC (en inglés)",
    "Chinese": "伯克利免费诊所"
  },
  "-1466406966": {
    "English": "Toll-free: (800) 6-CLINIC",
    "Spanish": "Gratuito: (800) 6-CLINIC",
    "Chinese": "免费电话:(800)6-CLINIC"
  },
  "-1560864404": {
    "English": "Mission",
    "Spanish": "La misión",
    "Chinese": "任务"
  },
  "-122938518": {
    "English": "Volunteer",
    "Spanish": "voluntario",
    "Chinese": "志愿者"
  }
}
function translate(lang) {
  translateNode(lang, document.body)
}

function translateNode(lang, node) {
  if (node.nodeType == Node.TEXT_NODE) {
    if (node.textContent.trim().length != 0) {
      let nodeId = node.data_hash_id;
      translationItem = translations[nodeId];
      if(translationItem !== undefined) {
        node.textContent = translationItem[lang];
      } else {
        console.log(node.textContent);
      }
    };
  }
  node.childNodes.forEach(child => {
    translateNode(lang, child);
  });
}

function hashCode(str) {
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}


function assignId(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.textContent.trim().length !== 0) {
      const hashedValue = hashCode(node.textContent.trim());
      node.data_hash_id = hashedValue;
    }
  }
  node.childNodes.forEach((child) => {
    assignId(child);
  });
}

document.body.onload = (() => assignId(document.body))