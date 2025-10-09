

const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp({
  data() {
    return {
      //--------menu--------//
      hover: null,
      menuActive: false,
      header: { 
        logoSrc: "image/header/kmau-logo-white-color.png", // 初始圖片
        logoAlt: "Kmau" ,
        logoDefault: "image/header/kmau-logo-white-color.png",// 預設圖片
        logoScrolled: "image/header/kmau-logo-white-blue.png",// 滑到 About 後要換的圖片
        
      
      },
      isScrolled: false, // 追蹤是否已經滾動過 About 區塊
      menuActive: false,
      menuItems: [
        { name: "關於我們", link: "#about" },
        { name: "服務項目", link: "#solutions" },
        { name: "聯絡我們", link: "#contact" },
      ],
      //--------hero--------//
      hero: {
        bg: "image/hero-image/hero01.png", // 背景圖片路徑
        companyname: "KAIMAU INFORMATION CO.,LTD",
        title: "提供企業級 GPU 伺服器與 AI 運算平台",
        subtitle: '專注於 IT 整合服務與解決方案',
      },



      //--------回到頂端按鈕顯示控制--------//
      showBackToTop: false,
      //--------關於我們--------//
      about: { 
        title:"您可信賴的IT夥伴", 
        text:`
        凱茂資訊成立於2009年，迄今已成為多家知名軟、硬體大廠之大型客戶承銷商。總部設於台中，服務網絡涵蓋北中南，我們提供IT基礎建設規劃、虛擬化與雲端整合、資訊安全防護、備援備份、端點管理到網路架構與系統為運等完整解決方案，協助客戶在多變的市場環境中穩健成長。
        
        凱茂資訊團隊秉持 ｢誠信、專業、熱忱、堅持｣ 的核心價值，以快速響應，高彈性服務模式，量身打造符合企業營運的需求的IT架構，讓科技真正為企業創造價值
        `
      },
      //----------痛點 ---------//
      painPoints: {
        columns: [
          //左邊企業常見痛點
          { 
            //左邊標題
            mainTitle: "企業常見痛點",
            subTitle: "您是否也遇到這些問題?",
            //左邊內容
            items: [
              {
                icon: "image/pain-icon/pain-left/pain-l1.png",
                title: "網路架構缺乏全貌",
                text: "設備分散，資安邊界模糊。"
              },
              {
                icon: "image/pain-icon/pain-left/pain-l2.png",
                title: " 設備與人員存取管理斷層",
                text: " 使用者與權限無法即時落實控管。"
              },
              {
                icon: "image/pain-icon/pain-left/pain-l3.png",
                title: " 行動裝置/BYOD 零信任挑戰",
                text: " 私人設備無法控管，惡意程式或釣魚APP混入。"
              },
              {
                icon: "image/pain-icon/pain-left/pain-l4.png",
                title: " 作業系統與資安配置不一致",
                text: " 端點環境不統一，易成漏洞入口。"
              },
              {
                icon: "image/pain-icon/pain-left/pain-l5.png",
                title: " 供應鏈安全風險",
                text: " 第三方合作廠商、外包商成為駭客後門。"
              },
              {
                icon: "image/pain-icon/pain-left/pain-l6.png",
                title: " 生成式AI濫用風險",
                text: " 資料外洩、模型濫用、合規責任風險。"
              },
            ]
          },
          //右邊對應方法
          {
            //右邊標題
            mainTitle: "凱茂提供核心對應方案",
            subTitle: "我們如何協助您?",
            //右邊內容
            items: [
              {
                icon: "image/pain-icon/pain-right/pain-r1.png",
                title: "網路設備與資安邊界整合",
                text: "全面盤點整合。"
              },
              {
                icon: "image/pain-icon/pain-right/pain-r2.png",
                title: "導入SIEM、EDR 與XDR",
                text: "建立可視化操作監控機制。"
              },
              {
                icon: "image/pain-icon/pain-right/pain-r3.png",
                title: "推動MDM/NAC政策",
                text: "控管行動裝置與非授權設備。"
              },
              {
                icon: "image/pain-icon/pain-right/pain-r4.png",
                title: "協助統一作業系統與資安配置",
                text: "安裝端點防護並落實更新。"
              },
              {
                icon: "image/pain-icon/pain-right/pain-r5.png",
                title: "導入PAM/ZTNA控管外部存取",
                text: "落實最小權限降低供應鏈風險。"
              },
              {
                icon: "image/pain-icon/pain-right/pain-r6.png",
                title: "GenAI使用政策整合DLP機制",
                text: "防止敏感資料外流。"
              },
            ]
          }
        ]
      },

      //--------解決方案--------//
      solutionsTitle: "九大服務方案 ",
      solutions: [
        { title: "GPU 伺服器與 AI 運算平台", 
          chinesetext: `
          企業級 GPU 伺服器，採用 NVIDIA H100/H200、L40S 與 RTX 6000 Ada，
          支援 AI 訓練、推理與高效視覺化。
          ` ,
          img: "image/solutions-image/S01.jpg",
        },

        { 
          title: "企業網路與高可用架構", 
          chinesetext: `設計雙核心、負載平衡、BGP/OSPF 與 QoS 的企業網路，確保穩定與不中斷營運。` ,
          img: "image/solutions-image/S02.jpg"
        },

        { 
          title: "零信任資安與防護", 
          chinesetext: `導入 MFA、ZTNA/SASE、EDR/XDR 與 DLP，打造零信任資安架構，確保 IT 環境安全。` ,
          img: "image/solutions-image/S03.jpg",
        },

        { 
          title: "全快閃儲存與資料管理", 
          chinesetext: `部署 NVMe All-Flash 儲存，搭配去重、壓縮、快照與異地備援，兼顧效能與安全。` ,
          img: "image/solutions-image/S04.jpg",
        },

        { 
          title: "雲端整合與混合雲架構", 
          chinesetext: `整合 Azure、AWS、GCP 與私有雲，打造彈性可擴充的混合雲環境。` ,
          img: "image/solutions-image/S05.jpg",
        },
        { 
          title: "IT 維運與委外服務", 
          chinesetext: `年度 / 季度巡檢、主動監控與委外維運，確保 IT 系統持續營運。` ,
          img: "image/solutions-image/S06.jpg",
        },
        { 
          title: "災難復原與營運持續性", 
          chinesetext: `規劃 RTO/RPO、備份與演練，確保意外事件發生時企業仍能持續營運。`,
          img: "image/solutions-image/S07.jpg",
        },
        { 
          title: "顧問、教育訓練與法規遵循", 
          chinesetext: `協助導入 ISO 27001/42001 與內部教育訓練，符合國際標準與法規要求。`,
          img: "image/solutions-image/S08.jpg",
        },
        { 
          title: "AI SaaS 平台服務", 
          chinesetext: `打造專屬 AI SaaS 平台，包括視覺檢測、資安監控與 GPU 雲服務，協助企業建立訂閱制商業模式。`,
          img: "image/solutions-image/S09.jpg",
        },
          
        
      ],



      //--------partners--------//
      logos: { title: "Partners" },
      partners: [
      { src: "image/logos/asus.png", alt: "asus" },
      { src: "image/logos/aruba.png", alt: "aruba" },
      { src: "image/logos/fortinet.png", alt: "fortinet" },
      { src: "image/logos/lenovo.png", alt: "lenovo" },
      { src: "image/logos/nvidia.png", alt: "nvidia" },
      { src: "image/logos/microsoft.png", alt: "minecrosoft" },
      { src: "image/logos/paloauto.png", alt: "paloauto" },
      { src: "image/logos/hp.png", alt: "hp" },
      { src: "image/logos/hpe.png", alt: "hpe" },
      { src: "image/logos/synology.png", alt: "synology" },
      //跟上面一樣//
      { src: "image/logos/asus.png", alt: "asus" },
      { src: "image/logos/aruba.png", alt: "aruba" },
      { src: "image/logos/fortinet.png", alt: "fortinet" },
      { src: "image/logos/lenovo.png", alt: "lenovo" },
      { src: "image/logos/nvidia.png", alt: "nvidia" },
      { src: "image/logos/microsoft.png", alt: "minecrosoft" },
      { src: "image/logos/paloauto.png", alt: "paloauto" },
      { src: "image/logos/hp.png", alt: "hp" },
      { src: "image/logos/hpe.png", alt: "hpe" },
      { src: "image/logos/synology.png", alt: "synology" },
      ],


      //--------聯絡我們--------//
      contact: { 
        titleSrc: "image/contact/kmau-logo-full-2.png", titleAlt: "Contact Us", title: "聯絡我們",
        background: "image/contact/contact-bg.png", // 背景圖片路徑

        mailSrc: "image/icon/mail.png", mailAlt: "Email Icon",

        email: "service@kmau.com.tw", 

        telSrc: "image/icon/tel.png", telAlt: "Phone Icon",

        tel: "Tel:04 2375 8388",
        fex: "Fax:04 2375 9399",

        locationSrc: "image/icon/location.png", locationAlt: "Location Icon",
        location: "台中市西區忠明南路270號10樓之4",  

        time: "營業時間週一至週五09:00 - 18:00"

      },


      //--------footer--------//
      footer: { text: "© 2025 Kmau. All rights reserved." }
    }
  },
  
 methods: {
    //漢堡選單模式
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },

    // 滑動偵測
handleScroll() {
  const aboutSection = document.querySelector('#about');
  const scrollY = window.scrollY || window.pageYOffset;
    // 控制回到頂端按鈕
  this.showBackToTop = scrollY > 100; // 滾動超過 300px 才顯示

  // 控制 logo
  if (aboutSection) {
    const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;

    if (scrollY >= aboutTop - 70) { 
      this.header.logoSrc = this.header.logoScrolled;
      document.querySelector("nav").classList.add("scrolled");
    } else {
      this.header.logoSrc = this.header.logoDefault;
      document.querySelector("nav").classList.remove("scrolled");
    }
  }


},
    //回到頂部
    scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滾動
    });
  }
    
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 0,
        easing: 'ease-in-out'
      });
      AOS.refreshHard();
    });

    window.addEventListener("scroll", this.handleScroll, { passive: true });
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
});





app.use(vuetify)
app.mount('#app')
