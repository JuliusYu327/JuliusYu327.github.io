---
title: "多樓層辦公網路核心與存取層優化"
description: "從多樓層迴圈與非標準分線問題開始，重新規劃核心交換、存取層與二層網路保護。"
summary: "從四個樓層的 Network Loop 與非標準分線開始，重新規劃核心、存取層及二層網路保護。"
weight: 2
showHero: true
heroStyle: "big"
showTableOfContents: true
---

這個專案從使用者反映 NAS、印表機與 Internet 速度不穩開始。經過現場盤點後，確認問題是多樓層接線、網路迴圈與存取層管理方式共同造成。

## 專案摘要

| 項目 | 內容 |
|---|---|
| 場域 | 四個樓層的辦公網路 |
| 主要症狀 | NAS、印表機及 Internet 速度慢，連線偶發中斷 |
| 核心設備 | Aruba Instant On 1930 |
| 存取設備 | 六台 Zyxel GS1200-8 |
| 保護機制 | STP、BPDU Guard、DHCP Snooping |

## 問題背景

原有網路經過多次增設，樓層之間缺乏一致的拓樸與標示。部分線路採用非標準分線方式，同一樓層也存在重複上行，導致二層迴圈、廣播流量增加與設備學習表不穩定。

## 規劃後的分層網路架構

![多樓層辦公網路優化架構圖](/assets/office-network-architecture.svg)

資訊機箱內的防火牆與 Aruba 1930 作為網路出口及核心交換；六台 Zyxel GS1200-8 分別服務 1F、2F、3F Front、3F Back、4F Front 與 4F Back。各樓層以明確的單一上行回到核心，避免臨時串接形成不受控的路徑。

## 檢測結果

### 多樓層 Network Loop

1F 至 4F 的存取交換器之間存在未文件化的交叉連線。當兩條路徑同時啟用時，網路會形成迴圈，造成廣播封包持續放大，進而拖慢 NAS、印表機與 Internet 連線。

![loop畫面](/assets/loop_picture.png)

### 非標準分線

部分網路線曾以拆分線對的方式同時服務兩個端點。這種作法限制速度，也增加接觸不良與查修困難。此次施工將其改回標準八芯端接，並重新整理配線與標示。

![非標準分線](/assets/Duble_Head.png)

## 優化設計

### 核心與存取層

- Aruba 1930 負責核心交換與集中管理。
- 六台 Zyxel GS1200-8 明確對應各樓層與前後區域。
- 樓層交換器採星狀回接核心，不再互相任意串接。

### 二層保護

- 將核心交換器 STP Root Priority 設為 4096，固定 Root Bridge。
- 在終端連接埠啟用 BPDU Guard，阻止未授權交換器造成拓樸變動。
- 啟用 DHCP Snooping，限制只有可信任的上行埠可傳送 DHCP Server 回應。

### 文件化

- 建立樓層、交換器、連接埠與終端用途對照。
- 為上行、AP、PC、NAS 與印表機線路重新標示。
- 將正常拓樸與查修路徑整理成維運文件。

## 成果

- 排除跨樓層二層迴圈與不明重複上行。
- NAS、印表機與 Internet 連線恢復穩定。
- 核心與六台 Zyxel GS1200-8 的角色清楚可追蹤。
- STP、BPDU Guard 與 DHCP Snooping 降低後續誤接風險。
- 配線、設備與連接埠資訊完成文件化，縮短後續查修時間。

## 我的職責

- 現場拓樸、線路與設備盤點。
- 分析網路迴圈、分線與效能問題。
- 規劃 Aruba 1930 與六台 Zyxel GS1200-8 的分層架構。
- 執行 STP、BPDU Guard、DHCP Snooping 與連接埠設定。
- 完成施工驗證、標示與維運文件。
