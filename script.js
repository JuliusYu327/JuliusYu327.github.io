const projects = {
  firewall: {
    kicker: "NETWORK SECURITY / FORTIGATE 91G",
    title: "企業防火牆移轉與 FortiLink 整合",
    body: `<p><strong>工作內容</strong></p><ul><li>盤點舊設備的介面、路由、網路物件與安全政策。</li><li>手動將設定移轉至新 FortiGate，保留既有網路邏輯。</li><li>針對 FortiSwitch 無法註冊問題，檢查 FortiLink、授權狀態與設備連線。</li><li>使用 CLI 與系統紀錄確認設定同步及連線狀態。</li></ul><p><strong>使用技術：</strong>FortiGate、FortiSwitch、FortiLink、VLAN、Firewall Policy</p>`
  },
  wifi: {
    kicker: "WIRELESS / FORTIAP",
    title: "企業無線網路漫遊優化",
    body: `<p><strong>工作內容</strong></p><ul><li>依時間與 AP 分析斷線及 Deauthentication 紀錄。</li><li>辨識用戶端拒絕 802.11v 漫遊、持續連線遠端 AP 的狀況。</li><li>規劃 Sticky Client Removal、RSSI 門檻與頻道配置。</li><li>確認調整對涵蓋範圍與使用者連線的影響。</li></ul><p><strong>使用技術：</strong>FortiAP、802.11v、RSSI、Wi-Fi Roaming、Log Analysis</p>`
  },
  pve: {
    kicker: "SYSTEM / PROXMOX VE",
    title: "伺服器虛擬化平台部署",
    body: `<p><strong>工作內容</strong></p><ul><li>規劃裸機安裝 Proxmox VE 的完整流程。</li><li>透過 BMC Remote Console 掛載 ISO 與操作虛擬媒體。</li><li>檢查 BIOS 虛擬化設定、KVM 支援及開機順序。</li><li>排除 ISO 無法掛載與 Linux Boot Manager 殘留問題。</li></ul><p><strong>使用技術：</strong>Proxmox VE、KVM、BMC、UEFI、Remote Console</p>`
  },
  san: {
    kicker: "STORAGE / DELL POWERVAULT ME5024",
    title: "SAN 儲存架構規劃",
    body: `<p><strong>工作內容</strong></p><ul><li>將客戶需求轉換為 SAN 架構、容量與可用性條件。</li><li>以 Dell PowerVault ME5024 規劃雙控制器與冗餘連線。</li><li>整理 SAN 與 PowerStore 的定位差異。</li><li>製作架構圖與提案簡報，說明主機、交換器及儲存設備關係。</li></ul><p><strong>使用技術：</strong>SAN、PowerVault ME5024、Multipath、High Availability</p>`
  },
  cctv: {
    kicker: "SOLUTION / CCTV & VMS",
    title: "CCTV 與 VMS 解決方案設計",
    body: `<p><strong>工作內容</strong></p><ul><li>比較 DVR、NVR 與 NAS + VMS 的架構和限制。</li><li>針對電子廠出貨碼頭規劃三至六個月的影像保存。</li><li>評估攝影機通道數、錄影容量、軟體授權與後續擴充。</li><li>納入人臉、行為與工控場域等 AI 辨識需求。</li></ul><p><strong>使用技術：</strong>CCTV、NVR、NAS、VMS、Video Retention、AI Analytics</p>`
  },
  policy: {
    kicker: "SECURITY POLICY / WEB FILTER",
    title: "企業上網政策與連線問題排除",
    body: `<p><strong>工作內容</strong></p><ul><li>依政策流向檢查 Web Filter 與安全設定。</li><li>辨識 iCloud Private Relay 對連線路徑與網域存取的影響。</li><li>追查 mask-api.icloud.com 被封鎖的原因。</li><li>評估警告、封鎖與例外設定對企業網路的影響。</li></ul><p><strong>使用技術：</strong>FortiGate、Web Filter、DNS、iCloud Private Relay</p>`
  }
};

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category);
    });
  });
});

const dialog = document.querySelector('#projectDialog');
document.querySelectorAll('.project-open').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    document.querySelector('#dialogKicker').textContent = project.kicker;
    document.querySelector('#dialogTitle').textContent = project.title;
    document.querySelector('#dialogBody').innerHTML = project.body;
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
