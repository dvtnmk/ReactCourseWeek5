import React from "react";
import Segment from "components/Segment";
import ViewFlex from "components/ViewFlex";
import ProfileImage from "components/ProfileImage";
import { Icon } from "antd";
import CapsuleButton from "components/CapsuleButton";
import "./styles.scss";

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

function FeedAction() {
  return <span>test</span>
}

function StoriesAction() {
  return <span>testaction2</span>
}

function PostSection() {
  return (
    <Segment title="โพสต์" actions={[<FeedAction />, <StoriesAction />]}>
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

export default PostSection;
