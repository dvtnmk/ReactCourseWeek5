import React, { useEffect, useState } from "react";
import Segment from "components/Segment";
import ViewFlex from "components/ViewFlex";
import ProfileImage from "components/ProfileImage";
import { Icon, Row, Col, Dropdown, Menu } from "antd";
import CapsuleButton from "components/CapsuleButton";
import CheckBox from "components/CheckBox";
import { connect } from "react-redux";
import Button from "components/Button";
import "./styles.scss";

// const privacyMenu = (
//   <Menu onClick={() => {}}>
//     <Menu.Item key="public">
//       <Icon type="global" />
//       สาธารณะ
//     </Menu.Item>
//     <Menu.Item key="onlyMe">
//       <Icon type="lock" />
//       เฉพาะฉัน
//     </Menu.Item>
//     <Menu.Item key="friend">
//       <Icon type="user" />
//       เพื่อน
//     </Menu.Item>
//   </Menu>
// );

const postOptions = [
  {
    icon: <Icon type="user" />,
    label: "first user"
  },
  {
    icon: <Icon type="plus" />,
    label: "Tag friends"
  },
  {
    icon: <Icon type="minus" />,
    label: "Delete Tag friends"
  }
];

function renderPostOptions(options) {
  return options.map(option => (
    <ViewFlex margin={false}>
      <CapsuleButton {...option} />
    </ViewFlex>
  ));
}

function PrivacySelector({ privacyMenu }) {
  return (
    <Dropdown overlay={privacyMenu} trigger={["click"]}>
      <Button style={{ float: "right" }}>
        <Icon type="global" /> Privacy <Icon type="down" />
      </Button>
    </Dropdown>
  );
}

const createPrivacyMenu = privacies => {
  return (
    <Menu onClick={() => {}}>
      {privacies.map(privacy => (
        <Menu.Item key={privacy.name}>
          <Icon type={privacy.icon} />
          {privacy.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};

function FeedAction({ privacies }) {
  const [privacyMenu, setPrivacyMenu] = useState(null);

  useEffect(() => {
    // if (privacies.length > 0) {
      const privaciesComponent = createPrivacyMenu(privacies);
      setPrivacyMenu(privaciesComponent);
    // }
  }, [privacies]);
  return (
    <div>
      <Row>
        <Col span={12}>
          <CheckBox icon={<Icon type="notification" />} label="ฟีคข่าว" />
        </Col>
        <Col span={12}>
          <PrivacySelector privacyMenu={privacyMenu} />
        </Col>
      </Row>
    </div>
  );
}

function StoriesAction({ privacies }) {
  const [privacyMenu, setPrivacyMenu] = useState(null);

  useEffect(() => {
    // if (privacies.length > 0) {
      const privaciesComponent = createPrivacyMenu(privacies);
      setPrivacyMenu(privaciesComponent);
    // }
  }, [privacies]);
  return (
    <div>
      <Row>
        <Col span={12}>
          <CheckBox
            icon={
              <ProfileImage
                icon={<Icon type="plus" />}
                size="x2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mark_Zuckerberg_cropped.jpg/220px-Mark_Zuckerberg_cropped.jpg"
              />
            }
            label="เรื่องราวของฉัน"
          />
        </Col>
        <Col span={12}>
          <PrivacySelector privacyMenu={privacyMenu} />
        </Col>
      </Row>
    </div>
  );
}

function ShareAction() {
  return (
    <ViewFlex>
      <ViewFlex className="gapRight">
        <Dropdown trigger={["click"]}>
          <Button>
            <Icon type="down" /> See More
          </Button>
        </Dropdown>
      </ViewFlex>
      <ViewFlex fluid>
        <Button type="primary" block>
          แชร์
        </Button>
      </ViewFlex>
    </ViewFlex>
  );
}

function PostSection({ post }) {
  return (
    <Segment
      title="โพสต์"
      actions={[
        <FeedAction privacies={post.privacies} />,
        <StoriesAction privacies={post.privacies} />,
        <ShareAction />
      ]}
    >
      <ViewFlex column>
        <ViewFlex className="postSection">
          <ViewFlex>
            <ProfileImage
              size="x3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mark_Zuckerberg_cropped.jpg/220px-Mark_Zuckerberg_cropped.jpg"
            />
          </ViewFlex>
          <ViewFlex fluid>
            <textarea
              className="postInputArea"
              placeholder="คุณกำลังคิดอะไรอยู่..."
            />
          </ViewFlex>
        </ViewFlex>
        <ViewFlex margin={false}>{renderPostOptions(postOptions)}</ViewFlex>
      </ViewFlex>
    </Segment>
  );
}

const mapStateToProps = ({ post }) => ({ post });

export default connect(mapStateToProps)(PostSection);
