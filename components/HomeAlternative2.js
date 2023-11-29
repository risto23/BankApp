import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import styles from "../css/CSS_All"

const HomeAlternative2 = () => {
  return (
    <LinearGradient
      style={styles.homeAlternative2}
      locations={[0, 1]}
      colors={["#fff", "#ebf9ff"]}
      useAngle={true}
      angle={180}
    >
      <View style={styles.menu}>
        <View style={[styles.finance, styles.billLayout]}>
          <Text style={[styles.manajemenKeuangan, styles.transfer1FlexBox]}>
            Finance
          </Text>
          <Image
            style={[styles.manajemenKeuanganIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/manajemen-keuangan.png")}
          />
        </View>
        <Image
          style={styles.moreIcon}
          resizeMode="cover"
          source={require("../assets/more.png")}
        />
        <View style={[styles.transfer, styles.transferLayout]}>
          <Text style={[styles.transfer1, styles.transferLayout]}>
            Transfer
          </Text>
          <Image
            style={[styles.transferIcon, styles.iconPosition2]}
            resizeMode="cover"
            source={require("../assets/transfer.png")}
          />
        </View>
        <View style={[styles.bill, styles.transferLayout]}>
          <Text style={[styles.transfer1, styles.transferLayout]}>Bill</Text>
          <Image
            style={[styles.transferIcon, styles.iconPosition2]}
            resizeMode="cover"
            source={require("../assets/pembayaran.png")}
          />
        </View>
        <View style={[styles.payment, styles.paymentLayout]}>
          <Text style={[styles.pembelian, styles.paymentLayout]}>Payment</Text>
          <Image
            style={[styles.pembelianIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/pembelian.png")}
          />
        </View>
        <View style={[styles.cardless, styles.cardlessPosition]}>
          <Text style={[styles.transfer1, styles.transferLayout]}>
            Cardless
          </Text>
          <Image
            style={[styles.cardlessIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/cardless.png")}
          />
        </View>
        <View style={[styles.openAccount, styles.cardlessPosition]}>
          <Text style={[styles.transfer1, styles.transferLayout]}>
            Open Account
          </Text>
          <Image
            style={[styles.cardlessIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/open-account.png")}
          />
        </View>
        <View style={[styles.deposito, styles.cardlessPosition]}>
          <Text style={[styles.transfer1, styles.transferLayout]}>
            bjb Deposito
          </Text>
          <Image
            style={[styles.cardlessIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/deposito.png")}
          />
        </View>
      </View>
      
      <View style={[styles.rectangleParent, styles.groupLayout2]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <LinearGradient
          style={[styles.groupItem, styles.groupPosition]}
          locations={[0, 0, 1]}
          colors={["#fff", "#fff", "#d8f2ff"]}
          useAngle={true}
          angle={135}
        />
        {/* <View style={[styles.tabunganTandamataParent, styles.parentPosition]}>
          <Text
            style={[styles.tabunganTandamata, styles.idrFlexBox]}
          >{`Tabungan Tandamata`}</Text>
          <Text style={[styles.text, styles.idrFlexBox]}>0021*****5100</Text>
          <Text style={[styles.idr13373000, styles.idrTypo]}>
            IDR 13,373,000
          </Text>
          <Image
            style={[styles.eyeSlashIcon, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eyeslash.png")}
          />
        </View> */}
        <Image
          style={[styles.path79Icon, styles.path79IconLayout]}
          resizeMode="cover"
          source={require("../assets/path-79.png")}
        />
        <Image
          style={[styles.maskGroup27, styles.idr3373000Position]}
          resizeMode="cover"
          source={require("../assets/mask-group-27.png")}
        />
      </View>

      <View style={styles.bgHeadParent}>
        <Image
          style={styles.bgHeadIcon}
          resizeMode="cover"
          source={require("../assets/bghead.png")}
        />
        <View style={styles.tammiParent}>
          <Text style={[styles.tammi, styles.hiClr]}>Tammi</Text>
          <Text style={[styles.hi, styles.hiClr]}>Hi</Text>
        </View>
        <Text style={[styles.poin, styles.hiClr]}>2.167 Point</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <View style={styles.swapHorizontalParent}>
            <Image
              style={styles.swapHorizontalIcon}
              resizeMode="cover"
              source={require("../assets/swaphorizontal.png")}
            />
            <Text style={[styles.redeem, styles.redeemTypo]}>Redeem</Text>
          </View>
        </View>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-11391.png")}
        />
      </View>

      <View style={styles.userProfileParent}>
        <Image
          style={[styles.userProfileIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/userprofile.png")}
        />
        <Text style={[styles.myInfo, styles.redeemTypo]}>My Info</Text>
      </View>

      <View style={[styles.rectangleContainer, styles.groupLayout2]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <LinearGradient
          style={[styles.groupItem, styles.groupPosition]}
          locations={[0, 0.74, 1]}
          colors={["#fff", "#fff", "#d8f2ff"]}
          useAngle={true}
          angle={135}
        />
        <View style={[styles.digicashParent, styles.parentPosition]}>
          <Text style={[styles.digicash, styles.idrFlexBox]}>Digicash</Text>
          <Text style={[styles.idr3373000, styles.idr3373000Position]}>
            IDR 3,373,000
          </Text>
          <Image
            style={[styles.eyeSlashIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eyeslash1.png")}
          />
        </View>
        <Image
          style={[styles.path79Icon1, styles.path79IconLayout]}
          resizeMode="cover"
          source={require("../assets/path-791.png")}
        />
        <Image
          style={styles.image39Icon}
          resizeMode="cover"
          source={require("../assets/image-39.png")}
        />
      </View>

      <View style={styles.homeAlternative2Inner}>
        <View style={styles.infoDanPromoParent}>
          <Text style={[styles.infoDanPromo, styles.transfer1FlexBox]}>
            Info dan Promo
          </Text>
          <Image
            style={[styles.bannerIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/banner.png")}
          />
          <Image
            style={[styles.banner1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/banner.png")}
          />
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <View style={[styles.groupChild2, styles.groupLayout]} />
            <View style={[styles.groupChild3, styles.groupChild3Position]} />
          </View>
        </View>
      </View>

      <View style={styles.navigation}>
        <Image
          style={[styles.path3655Icon, styles.idr13373000Position]}
          resizeMode="cover"
          source={require("../assets/path-3655.png")}
        />
        <Image
          style={[styles.qrisIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/qris.png")}
        />
        <View style={[styles.nav, styles.navLayout]}>
          <View style={[styles.left, styles.navLayout]}>
            <Image
              style={[styles.mailOutlineIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/mailoutline.png")}
            />
            <Text style={[styles.inbox, styles.inboxLayout]}>Inbox</Text>
            <Text style={[styles.favorite, styles.inboxLayout]}>Favorite</Text>
            <Image
              style={[styles.iconFeatherHeart, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon-featherheart.png")}
            />
          </View>
          <View style={styles.right}>
            <View style={[styles.setting, styles.settingPosition]}>
              <Text style={[styles.setting1, styles.settingPosition]}>
                Setting
              </Text>
              <Image
                style={[styles.iconFeatherSettings, styles.groupChild3Position]}
                resizeMode="cover"
                source={require("../assets/icon-feathersettings.png")}
              />
            </View>
            <View style={[styles.logout, styles.inboxLayout]}>
              <Text style={[styles.logOut, styles.inboxLayout]}>Log Out</Text>
              <Image
                style={[styles.iconFeatherLogOut, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/icon-featherlogout.png")}
              />
            </View>
          </View>
        </View>
      </View>
      
      <Image
        style={styles.topBarIcon}
        resizeMode="cover"
        source={require("../assets/top-bar.png")}
      />
    </LinearGradient>
  );
};



export default HomeAlternative2;
