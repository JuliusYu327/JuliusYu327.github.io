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
        logoSrc: "../header/kmau-logo.png", // 初始圖片
        logoAlt: "Kmau" ,
      },
      //--------關於我們--------//
      about: { 
        title:'GPU 伺服器與 AI 運算平台', 
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
                icon: "../pain-icon/pain-left/pain-l1.png",
                title: "網路架構缺乏全貌",
                text: "設備分散，資安邊界模糊。"
              },
              {
                icon: "../pain-icon/pain-left/pain-l2.png",
                title: " 設備與人員存取管理斷層",
                text: " 使用者與權限無法即時落實控管。"
              },
              {
                icon: "../pain-icon/pain-left/pain-l3.png",
                title: " 行動裝置/BYOD 零信任挑戰",
                text: " 私人設備無法控管，惡意程式或釣魚APP混入。"
              },
              {
                icon: "../pain-icon/pain-left/pain-l4.png",
                title: " 作業系統與資安配置不一致",
                text: " 端點環境不統一，易成漏洞入口。"
              },
              {
                icon: "../pain-icon/pain-left/pain-l5.png",
                title: " 供應鏈安全風險",
                text: " 第三方合作廠商、外包商成為駭客後門。"
              },
              {
                icon: "../pain-icon/pain-left/pain-l6.png",
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
                icon: "../pain-icon/pain-right/pain-r1.png",
                title: "網路設備與資安邊界整合",
                text: "全面盤點整合。"
              },
              {
                icon: "../pain-icon/pain-right/pain-r2.png",
                title: "導入SIEM、EDR 與XDR",
                text: "建立可視化操作監控機制。"
              },
              {
                icon: "../pain-icon/pain-right/pain-r3.png",
                title: "推動MDM/NAC政策",
                text: "控管行動裝置與非授權設備。"
              },
              {
                icon: "../pain-icon/pain-right/pain-r4.png",
                title: "協助統一作業系統與資安配置",
                text: "安裝端點防護並落實更新。"
              },
              {
                icon: "../pain-icon/pain-right/pain-r5.png",
                title: "導入PAM/ZTNA控管外部存取",
                text: "落實最小權限降低供應鏈風險。"
              },
              {
                icon: "../pain-icon/pain-right/pain-r6.png",
                title: "GenAI使用政策整合DLP機制",
                text: "防止敏感資料外流。"
              },
            ]
          }
        ]
      },





      //--------partners--------//
      logos: { title: "Partners" },
      partners: [
      { src: "../logos/asus.png", alt: "asus" },
      { src: "../logos/aruba.png", alt: "aruba" },
      { src: "../logos/fortinet.png", alt: "fortinet" },
      { src: "../logos/lenovo.png", alt: "lenovo" },
      { src: "../logos/nvidia.png", alt: "nvidia" },
      { src: "../logos/microsoft.png", alt: "minecrosoft" },
      { src: "../logos/paloauto.png", alt: "paloauto" },
      { src: "../logos/hp.png", alt: "hp" },
      { src: "../logos/hpe.png", alt: "hpe" },
      { src: "../logos/synology.png", alt: "synology" },
      //跟上面一樣//
      { src: "../logos/asus.png", alt: "asus" },
      { src: "../logos/aruba.png", alt: "aruba" },
      { src: "../logos/fortinet.png", alt: "fortinet" },
      { src: "../logos/lenovo.png", alt: "lenovo" },
      { src: "../logos/nvidia.png", alt: "nvidia" },
      { src: "../logos/microsoft.png", alt: "minecrosoft" },
      { src: "../logos/paloauto.png", alt: "paloauto" },
      { src: "../logos/hp.png", alt: "hp" },
      { src: "../logos/hpe.png", alt: "hpe" },
      { src: "../logos/synology.png", alt: "synology" },
      ],


      //--------聯絡我們--------//
      contact: { 
        titleSrc: "../images/kmau-logo-full-2.png", titleAlt: "Contact Us", title: "聯絡我們",
        background: "../background/contact-bg.png", // 背景圖片路徑

        mailSrc: "../icon/mail.png", mailAlt: "Email Icon",

        email: "service@kmau.com.tw", 

        telSrc: "../icon/tel.png", telAlt: "Phone Icon",

        tel: "TEL:(04) 2375-8388",
        fex: "FAX:(04) 2375-9399",

        locationSrc: "../icon/location.png", locationAlt: "Location Icon",
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

    // 滑動更換 logo
    handleScroll() {
      const aboutSection = document.querySelector('#about');
      const scrollY = window.scrollY || window.pageYOffset;

      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;

        if (scrollY >= aboutTop - 70) { // 滾到 about
          this.header.logoSrc = this.header.logoScrolled;
          document.querySelector("nav").classList.add("scrolled"); // 文字顏色變
        } else {
          this.header.logoSrc = this.header.logoDefault;
          document.querySelector("nav").classList.remove("scrolled"); // 還原
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
