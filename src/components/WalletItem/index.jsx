import React from "react"
import PropTypes from "prop-types"
import styles from "./WalletItem.module.css"

function WalletItem({ label, ammount }) {
  return (
    <div className={styles.wallet_container}>
      <p className={styles.wallet_label_text}>{label}</p>

      <div className={styles.ammount_tokens}>
        <p className={styles.wallet_ammount_text}>{ammount}</p>

        <span className={styles.wallet_token}>Tokens</span>
      </div>
    </div>
  )
}
WalletItem.defaultProps = {
  label: " Current Balance",
  ammount: "100000",
}

WalletItem.propTypes = {
  label: PropTypes.string,
  ammount: PropTypes.string,
}

export default WalletItem
