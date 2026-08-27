---
title: "企業防火牆汰換與多據點 VPN 復原"
description: "FortiGate 60F 汰換為 71G，重建政策、SD-WAN、IPsec VPN 與 AD/FSSO，並完成兩次切換與回復。"
summary: "FortiGate 60F 汰換為 71G，重建政策、SD-WAN、IPsec VPN 與 AD/FSSO，完成兩次切換與回復。"
weight: 3
showHero: true
heroStyle: "big"
showTableOfContents: true
---

這是一個企業邊界防火牆汰換與多據點連線復原專案。將舊 FortiGate 60F 更新為 FortiGate 71G，在短暫停機窗口內重建既有政策、SD-WAN、IPsec VPN、AD/FSSO 與對外服務。

## 專案摘要

| 項目 | 內容 |
|---|---|
| 舊設備 | FortiGate 60F，FortiOS 7.4.4 |
| 新設備 | FortiGate 71G，最終 FortiOS 7.6.6 |
| 核心服務 | Policy、VLAN、LACP、SD-WAN、IPsec VPN、AD/FSSO、VIP |
| 執行方式 | 離線重建、分段升級、兩次正式切換與回復 |

## 背景與挑戰

舊設備承擔 Internet、DMZ、內部 VLAN、多條站點對站點 VPN 與身分驗證服務。新舊設備跨越硬體平台與 FortiOS 版本，如果介面名稱、物件、憑證或版本行為不同，可能導致政策與 VPN 看似存在卻無法通訊，因此在轉移過程中以手動設定為主。

## 汰換與復原流程

![FortiGate 防火牆汰換與 VPN 復原流程](/assets/firewall-refresh-workflow.svg)

## 離線重建

先在 FortiOS 7.4.6 建立可驗證的基礎設定，再依序升級至 7.4.9、7.4.12 與 7.6.6。每個版本階段都檢查設定完整性，避免跨版本一次升級時難以判斷問題來源。

重建範圍包括：

- LACP、實體介面與 VLAN。
- WAN、DMZ、DNS、靜態路由與 VIP。
- 防火牆政策、位址物件與服務物件。
- IPsec VPN、SD-WAN 與健康檢查。
- AD、FSSO、憑證與安全服務設定。

## 第一次切換與回復

第一次正式切換後，部分政策、VPN 與 AD/FSSO 驗證未全部符合預期。為控制停機時間，依照事前規劃回復到 FortiGate 60F，讓營運先恢復，再離線比對設定與流量路徑。

這次切換確認了幾個問題：部分政策與物件的相依關係未完整對應；VPN 資料中的預共享金鑰資訊有誤；舊 FSSO 憑證也無法直接沿用於新環境。

## 修正與第二次切換

- 重新建立乾淨的 7.4.6 基線，逐項匯入可驗證設定。
- 依服務流向核對 Policy、NAT、Route 與 SD-WAN 規則。
- 重新確認各據點 VPN 參數與正確的預共享金鑰。
- 更新 FSSO 憑證與連線設定，重新驗證 AD 使用者識別。
- 分段測試 Internet、跨 VLAN、DMZ、VPN 與身分政策後，再進行第二次切換。

第二次切換完成後，多據點 VPN、內外網、對外服務與 AD/FSSO 均通過驗證，新設備正式接手企業邊界流量。

## 成果

- 完成 FortiGate 60F 至 FortiGate 71G 的平台汰換。
- FortiOS 由 7.4 系列分段升級至 7.6.6。
- 復原多據點 IPsec VPN、SD-WAN、VIP 與身分驗證服務。
- 透過明確的回復條件控制第一次切換失敗的營運影響。
- 建立可重複使用的切換、驗證與回復清單。

## 我的職責

- 舊環境設定盤點與新設備基線規劃。
- FortiGate 71G 介面、政策、路由、VPN 與 AD/FSSO 建置。
- 規劃版本升級路徑與每階段驗證項目。
- 執行兩次現場切換、回復與問題排除。
- 整理施工紀錄、差異分析與最終維運資料。
