import React from 'react';
import Segment from 'components/Segment';
import ViewFlex from 'components/ViewFlex';
import ProfileImage from 'components/ProfileImage';
import './styles.scss';
function PostSection() {
  return (
    <Segment title="โพสต์" className="postSection">
      <ViewFlex>
        <ViewFlex>
          <ProfileImage size="x9" />
        </ViewFlex>
        <ViewFlex fulid>
          <textarea className="postInputArea" />
        </ViewFlex>
      </ViewFlex>
    </Segment>
  )
}

export default PostSection;