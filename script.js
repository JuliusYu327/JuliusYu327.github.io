const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp({
  data() {
    return {
      //--------menu--------//
      hover: null,
      menuActive: false,
      header: { logoSrc: "images/kmau-logo-color.png", logoAlt: "Kmau" },
      menuItems: [
        { name: "關於我們", link: "#about" },
        { name: "服務項目", link: "#solutions" },
        { name: "聯絡我們", link: "#contact" },
      ],
      //--------hero--------//
      hero: {
        bg: "background/city.jpg",
        companyname: "KAIMAU INFORMATION CO.,LTD",
        title: "提供企業級 GPU 伺服器與 AI 運算平台",
        subtitle: '專注於 IT 整合服務與解決方案',
      },


      //--------關於我們--------//
      about: { 
        title:'Your Trusted Partner \nin Enterprise IT Integration', 
        text:`
        凱茂專注於網路規劃建設與資訊系統整合服務，是一家位於台灣的系統整合公司，專注於 GPU 伺服器、企業網路、零信任資安與全快閃儲存。以穩定性、安全性與效能為核心，為企業打造面向 AI 時代的最佳 IT 解決方案。
        自成立以來，始終秉持「專業服務、誠信經營、永續成長」的核心理念，致力於為企業提供值得信賴的資訊解決方案。以國際化發展為目標，持續強化技術實力與服務品質，期望與客戶共同成長，打造雙贏合作模式。
        `
      },

      //--------解決方案--------//
      solutionsTitle: "Integration Solutions ",
      solutions: [
        { title: "GPU 伺服器與 AI 運算平台", 
          chinesetext: `
          企業級 GPU 伺服器，採用 NVIDIA H100/H200、L40S 與 RTX 6000 Ada，
          支援 AI 訓練、推理與高效視覺化。
          ` },
        { title: "企業網路與高可用架構", 
          chinesetext: `
          設計雙核心、負載平衡、BGP/OSPF 與 QoS 的企業網路，確保穩定與不中斷營運。
          ` },
        { title: "零信任資安與防護", 
          chinesetext: `
          導入 MFA、ZTNA/SASE、EDR/XDR 與 DLP，打造零信任資安架構，確保 IT 環境安全。
          ` },
        { title: "全快閃儲存與資料管理", 
          chinesetext: `
          部署 NVMe All-Flash 儲存，搭配去重、壓縮、快照與異地備援，兼顧效能與安全。
          ` },
        { title: "雲端整合與混合雲架構", 
          chinesetext: `
          整合 Azure、AWS、GCP 與私有雲，打造彈性可擴充的混合雲環境。
          ` },
        { title: "IT 維運與委外服務", 
          chinesetext: `
          年度 / 季度巡檢、主動監控與委外維運，確保 IT 系統持續營運。
          ` },
        { title: "災難復原與營運持續性", 
          chinesetext: `
          規劃 RTO/RPO、備份與演練，確保意外事件發生時企業仍能持續營運。
          `},
        { title: "顧問、教育訓練與法規遵循", 
          chinesetext: `
          協助導入 ISO 27001/42001 與內部教育訓練，符合國際標準與法規要求。
          `},
        { title: "AI SaaS 平台服務", 
          chinesetext: `
          打造專屬 AI SaaS 平台，包括視覺檢測、資安監控與 GPU 雲服務，協助企業建立訂閱制商業模式。
          `},
          
        
      ],



      //--------partners--------//
      logos: { title: "Partners" },
      partners: [
      { src: "logos/asus.png", alt: "asus" },
      { src: "logos/aruba.png", alt: "aruba" },
      { src: "logos/fortinet.png", alt: "fortinet" },
      { src: "logos/lenovo.png", alt: "lenovo" },
      { src: "logos/nvidia.png", alt: "nvidia" },
      { src: "logos/microsoft.png", alt: "minecrosoft" },
      { src: "logos/paloauto.png", alt: "paloauto" },
      { src: "logos/hp.png", alt: "hp" },
      { src: "logos/hpe.png", alt: "hpe" },
      { src: "logos/synology.png", alt: "synology" },
      ],

      //--------聯絡我們--------//
      contact: { 
        titleSrc: "images/kmau-logo-full.png", titleAlt: "Contact Us", title: "聯絡我們",
        background: "background/contact-bg.png", // 背景圖片路徑

        mailSrc: "icon/mail.png", mailAlt: "Email Icon",
        // emailtitle: "Email:",
        email: "service@kmau.com.tw", 

        telSrc: "icon/tel.png", telAlt: "Phone Icon",
        // teltitle: "TEL:",
        tel: "TEL:(04) 2375-8388",
        fex: "FAX:(04) 2375-9399",

        locationSrc: "icon/location.png", locationAlt: "Location Icon",
        location: "台中市西區忠明南路270號10樓之4",
        // locationtitle: "Location:",  

        time: "營業時間週一至週五09:00 - 18:00"
      },





      //--------footer--------//
      footer: { text: "© 2025 Kmau. All rights reserved." }
    }
  },
  //漢堡選單模式
  methods: {
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  
},
  mounted() {
    // 等 Vue 完全渲染 v-for 元素後再初始化 AOS
    this.$nextTick(() => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 0,
        easing: 'ease-in-out'
      });
      AOS.refreshHard();
    });

    
  }
});





app.use(vuetify)
app.mount('#app')
