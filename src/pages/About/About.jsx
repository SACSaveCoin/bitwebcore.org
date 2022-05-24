import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./About.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <img
          src="/img/logos/png/bitweb256px.png"
          alt="About us"
          className="logo-about"
        />
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">
                {t("foundationPage.missionStatementTitle")}
              </h2>
	      <img src="/img/photos/photo1.jpg" alt="" height="90"/>
              <p>{t("foundationPage.missionStatementText")}</p>
	      <img src="/img/photos/photo2.jpg" alt="" height="90"/>
              <p>{t("foundationPage.missionStatementText1")}</p>
	      <img src="/img/photos/photo3.png" alt="" height="90"/>
              <p>{t("foundationPage.missionStatementText2")}</p>

              <h2 className="title title--green title--left">
                {t("foundationPage.technicalSupportTitle")}
              </h2>
              <p>{t("foundationPage.technicalSupportText")}</p>
              <p>
                  <strong>BTE</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://explorer.bitwebcore.net/address/web1q8zwkqaz7yzv33aw4rlq6r5te22y2gk9p0q0xwr"
                >
                  {" "}
                  web1q8zwkqaz7yzv33aw4rlq6r5te22y2gk9p0q0xwr
                </a>
                <br />
                  <strong>SCA</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://explorer.scalaris.info/address/SjoT92w9e4vQ46T74cH7L1Q1hDL8mmpMe5"
                >
                  {" "}
                  SjoT92w9e4vQ46T74cH7L1Q1hDL8mmpMe5
                </a>
                <br />
                  <strong>BTC</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.blockchain.com/ru/btc/address/bc1qpgtmsmhaxmh0yrms2fdjwgg6jg24xud5j5rnk3"
                >
                  {" "}
                  bc1qpgtmsmhaxmh0yrms2fdjwgg6jg24xud5j5rnk3
                </a>
                <br />
                  <strong>LTC</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blockchair.com/ru/litecoin/address/ltc1qsegelz5pnrwvl50nvfh0eef33sef2cm0vvmtjl"
                >
                  {" "}
                  ltc1qsegelz5pnrwvl50nvfh0eef33sef2cm0vvmtjl
                </a>
                <br />
                  <strong>DOGE</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blockchair.com/dogecoin/address/D7kEYNpp2P3DTpXyabHJt5XC1GzXRxbRoY"
                >
                  {" "}
                  D7kEYNpp2P3DTpXyabHJt5XC1GzXRxbRoY
                </a>
                <br />
                  <strong>ETH</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://etherscan.io/address/0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7"
                >
                  {" "}
                  0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7
                </a>
                <br />
                  <strong>ETH USDT</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://etherscan.io/address/0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7"
                >
                  {" "}
                  0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7
                </a>
                <br />
                  <strong>USDT ERC20</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://etherscan.io/address/0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7"
                >
                  {" "}
                  0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7
                </a>
                <br />
                  <strong>BNB</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bscscan.com/address/0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7"
                >
                  {" "}
                  0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7
                </a>
                <br />

                  <strong>Polygon MATIC</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://polygonscan.com/address/0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7"
                >
                  {" "}
                0x93DFB4577D9250DfA1e0eF8b18b2f89fFEDC2dc7
                </a>
                <br />
                  <strong>TRX</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tronscan.org/#/address/TN5hANMVXaJtdbtG9bwm9YUd9rWeaUPoaa"
                >
                  {" "}
                  TN5hANMVXaJtdbtG9bwm9YUd9rWeaUPoaa
                </a>
                <br />
                  <strong>TRC20 USDT</strong> Donation Address
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tronscan.org/#/address/TN5hANMVXaJtdbtG9bwm9YUd9rWeaUPoaa"
                >
                  {" "}
                  TN5hANMVXaJtdbtG9bwm9YUd9rWeaUPoaa
				</a>
              </p>
            </div>
            <div className="col col--small">
              <h2 className="title title--green title--left">
                {t("foundationPage.contactUsTitle")}
              </h2>
              <p>
                <b>Bitweb Project</b>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/BitwebBTE"
                >
                  {" "}
                  Twitter
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/jQdttwgsJa"
                >
                  {" "}
                  Discord
                </a>
                
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/bitweb"
                >
                  {" "}
                  Telegram
                </a>
                <br />
              </p>
              <p>
                <a href="mailto:bitwebcore@gmail.com">
                  bitwebcore@gmail.com
                </a>
              </p>
              <p>Mraksoll:
                <a href="mailto:mraksoll4@gmail.com">
                  mraksoll4@gmail.com
                </a>
              </p>
              <p>Jcchain:
                <a href="mailto:jcchain999@gmail.com">
                  jcchain999@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <About />
    </Suspense>
  );
}

export default HoF;
