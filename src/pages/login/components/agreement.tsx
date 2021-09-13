import { Component } from "react";
import { View, Text, Image, ScrollView, Radio } from "@tarojs/components";
import wenben from "../mock";
import {
  AtButton,
  AtList,
  AtListItem,
  AtTabs,
  AtTabsPane,
  AtToast
} from "taro-ui";
import "../index.less";

class Agreement extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  back = () => {
    this.props.toggle(false);
  };

  render() {
    return (
      <View className="agreement_wrap">
        <View
          style={{
            width: "100vw",
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "10px"
          }}
        >
          <Text
            style={{
              width: "100vw",
              fontSize: "36px",
              textAlign: "center",
              marginBottom: "10px"
            }}
          >
            {this.props.type === "yh" ? "逸态用户注册协议" : "逸态隐私政策"}
          </Text>
        </View>
        {/* {wenben[this.props.type] || ""} */}
        {this.props.type === "yh" ? (
          <View>
            <Text>一、服务条款的确认及接受</Text>
            <View style={{ marginTop: "12px" }}>
              <Text>
                1、逸态网站（指ilonaltd.com及其移动客户端软件、应用程序，以下称“本网站”）各项电子服务的所有权和运作权归属于“逸态”所有，本网站提供的服务将完全按照其发布的服务条款和操作规则严格执行。您确认所有服务条款并完成注册程序时，本协议在您与本网站间成立并发生法律效力，同时您成为本网站正式用户。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                2、根据国家法律法规变化及本网站运营需要，逸态有权对本协议条款及相关规则不时地进行修改，修改后的内容一旦以任何形式公布在本网站上即生效，并取代此前相关内容，您应不时关注本网站公告、提示信息及协议、规则等相关内容的变动。您知悉并确认，如您不同意更新后的内容，应立即停止使用本网站；如您继续使用本网站，即视为知悉变动内容并同意接受。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                3、本协议内容中以加粗方式显著标识的条款，请您着重阅读。您点击“同意”按钮即视为您完全接受本协议，在点击之前请您再次确认已知悉并完全理解本协议的全部内容。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>二、服务须知</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                1、本网站运用自身开发的操作系统通过国际互联网络为用户提供购买商品等服务。使用本网站，您必须：
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （1）自行配备上网的所需设备，包括个人手机、平板电脑、调制解调器、路由器等；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （2）自行负担个人上网所支付的与此服务有关的电话费用、网络费用等；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （3）选择与所安装终端设备相匹配的软件版本，包括但不限于iOS、Android、Windows等多个逸态发布的应用版本。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>2、基于本网站所提供的网络服务的重要性，您确认并同意：</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （1）提供的注册资料真实、准确、完整、合法有效，注册资料如有变动的，应及时更新；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （2）如果您提供的注册资料不合法、不真实、不准确、不详尽的，您需承担因此引起的相应责任及后果，并且逸态保留终止您使用本网站各项服务的权利。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>三、用户个人信息保护及授权</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                1、您知悉并同意，为方便您使用本网站相关服务，本网站将存储您在使用时的必要信息，包括但不限于您的真实姓名、性别、生日、联系方式、通讯录、相册、日历、定位信息等。除法律法规规定的情形外，未经您的许可逸态不会向第三方公开、透露您的个人信息。逸态对相关信息采取专业加密存储与传输方式，利用合理措施保障用户个人信息的安全。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                2、您知悉并确认，您在注册帐号或使用本网站的过程中，需要提供真实的身份信息，逸态将根据国家法律法规相关要求，进行基于移动电话号码的真实身份信息认证。若您提供的信息不真实、不完整，则无法使用本网站或在使用过程中受到限制，同时，由此产生的不利后果，由您自行承担。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                3、您在使用本网站某一特定服务时，该服务可能会另有单独的协议、相关业务规则等（以下统称为“单独协议”），您在使用该项服务前请阅读并同意相关的单独协议；您使用前述特定服务，即视为您已阅读并同意接受相关单独协议。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>4、您充分理解并同意：</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （1）接收通过邮件、短信、电话等形式，向在本网站注册、购物的用户、收货人发送的订单信息、促销活动等内容；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （2）为配合行政监管机关、司法机关执行工作，在法律规定范围内逸态有权向上述行政、司法机关提供您在使用本网站时所储存的相关信息，包括但不限于您的注册信息等，或使用相关信息进行证据保全，包括但不限于公证、见证等；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （3）逸态依法保障您在安装或使用过程中的知情权和选择权，在您使用本网站服务过程中，涉及您设备自带功能的服务会提前征得您同意，您一经确认，逸态有权开启包括但不限于收集地理位置、读取通讯录、使用摄像头、启用录音等提供服务必要的辅助功能。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （4）逸态有权根据实际情况，在法律规定范围内自行决定单个用户在本网站及服务中数据的最长储存期限以及用户日志的储存期限，并在服务器上为其分配数据最大存储空间等。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>六、用户行为规范</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>1、您同意严格遵守法律法规规章规定，依法遵守以下义务：</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （（1）不得制作、传输或发表以下违法信息资料：反对宪法所确定的基本原则，煽动抗拒、破坏宪法和法律法规实施的；危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的，煽动推翻社会主义制度的；损害国家荣誉和利益的；歪曲、丑化、亵渎、否定英雄烈士事迹和精神，侵害英雄烈士的姓名、肖像、名誉、荣誉的；宣扬或煽动实施恐怖主义、极端主义及其活动的；煽动民族仇恨、民族歧视、破坏民族团结的言论；破坏国家宗教政策，宣扬邪教和封建迷信的；散布谣言，扰乱经济秩序和社会秩序的；散布淫秽、色情、暴力或者教唆犯罪的；侮辱或者诽谤他人，侵害他人名誉、隐私和其他合法权益的；法律、行政法规禁止的其他内容。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （2）防范和抵制制作、复制、发布含有下列内容的不良信息资料：标题严重夸张，发表内容与标题严重不符的；不当评述自然灾害、重大事故等灾难的；煽动人群歧视、地域歧视等的；宣扬低俗、庸俗、媚俗内容的；违反社会公德行为的；侵犯未成年人合法权益的；其他对网络生态造成不良影响的内容。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                2、本协议依据国家相关法律法规规章制定，您亦同意严格遵守以下义务：
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （1）从中国大陆向境外传输资料信息时必须符合中国有关法规；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （2）不得利用本网站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （3）不得干扰本网站的正常运转，不得侵入本网站及国家计算机信息系统；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （4）不得传输或发表任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的、不文明的等信息资料；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （5）不得教唆他人从事违法违规或本协议、平台规则所禁止的行为；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>（6）不得利用在本网站注册的账户进行牟利性经营活动；</Text>
            </View>

            <View style={{ marginTop: "12px" }}>
              <Text>
                （7）不得发布任何侵犯他人个人信息、著作权、商标权等知识产权或合法权利的内容；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                3、您须对自己在网上的言论和行为承担法律责任，您若在本网站上散布和传播反动、色情或其它违反国家法律的信息，本网站的系统记录有可能作为您违反法律的证据。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>七、本网站使用规范</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>1、关于移动客户端软件的获取与更新：</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （1）您可以直接从逸态网站上获取逸态移动客户端软件，也可以从得到逸态授权的第三方获取，如果您从未经逸态授权的第三方获取软件或与逸态移动客户端软件名称相同的安装程序，逸态无法保证该软件能够正常使用，并对因此给您造成的损失不予负责；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （2）为了改善用户体验、完善服务内容，逸态将不断努力开发新的服务，并为您不时提供软件更新，新版本发布后，旧版本的软件可能无法使用，逸态不保证旧版本软件继续可用及相应的客户服务，请您随时核对并下载最新版本。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                2、除非法律允许或逸态书面许可，您使用本网站过程中不得从事下列行为：
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>（1）删除本网站及其副本上关于著作权的信息；范</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （2）对本网站进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现本网站的源代码；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （3）对逸态拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （4）对本网站或者本网站运行过程中释放到任何终端内存中的数据、网站运行过程中客户端与服务器端的交互数据，以及本网站运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经逸态授权的第三方工具/服务接入本网站和相关系统；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （5）通过修改或伪造网站运行中的指令、数据，增加、删减、变动网站的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （6）通过非逸态开发、授权的第三方软件、插件、外挂、系统，登录或使用本网站及服务，或制作、发布、传播上述工具；
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                （7）自行或者授权他人、第三方软件对本网站及其组件、模块、数据进行干扰。
              </Text>
            </View>

            <View style={{ marginTop: "12px" }}>
              <Text>八、违约责任</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                1、如果逸态发现或收到他人举报投诉您违反本协议约定或存在任何恶意行为的，逸态有权不经通知随时对相关内容进行删除、屏蔽，并视行为情节对违规帐号处以包括但不限于警告、限制或禁止使用部分或全部功能、帐号封禁、注销等处罚，并公告处理结果。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                2、逸态有权依据合理判断对违反有关法律法规或本协议规定的行为采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，您应独自承担由此而产生的一切法律责任。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                3、您理解并同意，因您违反本协议或相关服务条款的规定，导致或产生第三方主张的任何索赔、要求或损失，您应当独立承担责任；逸态因此遭受损失的，您也应当一并赔偿。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                4、除非另有明确的书面说明,逸态不对本网站的运营及其包含在本网站上的信息、内容、材料、产品（包括软件）或服务作任何形式的、明示或默示的声明或担保（根据中华人民共和国法律另有规定的以外）。
              </Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>九、所有权及知识产权</Text>
            </View>
            <View style={{ marginTop: "12px" }}>
              <Text>
                1、您一旦接受本协议，对于您提供、上传、创作、发布在本网站的文字、评论、图片、照片。
              </Text>
            </View>
          </View>
        ) : null}
        <AtButton onClick={this.back}>返回</AtButton>
      </View>
    );
  }
}

export default Agreement;
