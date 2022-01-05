import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import SearchHistory from './SearchHistory';
import _ from 'lodash';
import CmtList from '../../../../../../../@coremat/CmtList';
import EmptyResult from '../EmptyResult';
import CmtMediaObject from '../../../../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../../../../@coremat/CmtAvatar';
import SearchBox from './SearchBox';

const useStyles = makeStyles(theme => ({
  requestDetailRoot: {
    padding: '12px 0',
    borderBottom: `solid 1px ${theme.palette.divider}`,
    cursor: 'pointer',
    '& .Cmt-media-object': {
      alignItems: 'center',
    },
  },
  sectionHeading: {
    fontSize: 10,
    color: theme.palette.text.secondary,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  avatarSize: {
    height: 40,
    width: 40,
    [theme.breakpoints.up('sm')]: {
      height: 56,
      width: 56,
    },
  },
  titleRoot: {
    fontSize: 14,
    cursor: 'pointer',
  },
  subTitleRoot: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: theme.palette.text.disabled,
  },
}));

const searchKeywords = ['Autopilot', 'React', 'Bootstrap', 'Crypto', 'Jumbo', 'Top Admin', 'AngulrJs'];

const Search = () => {
  const classes = useStyles();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [keywords, setKeywords] = useState(searchKeywords);
  const [requests, setRequests] = useState([]);
  const totalKeywords = useMemo(() => keywords.length, [keywords]);
  const totalRequests = useMemo(() => requests.length, [requests]);

  const delayedQuery = useCallback(
    _.debounce((newValue, noOfKeyword, keywords) => {
      addNewKeyword(newValue, noOfKeyword, keywords);
    }, 3000),
    [],
  );

  useEffect(() => {
    if (searchKeyword) {
      setRequests(requests =>
        requests.filter(
          item =>
            item.user.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.user.username.toLowerCase().includes(searchKeyword.toLowerCase()),
        ),
      );
    } else {
      setRequests([]);
    }
  }, [searchKeyword]);

  const onSearchKeyword = event => {
    setSearchKeyword(event.target.value);
    delayedQuery(event.target.value, totalKeywords, keywords);
  };

  const onSearchBlur = event => {
    addNewKeyword(event.target.value, totalKeywords, keywords);
  };

  const addNewKeyword = (keyword, totalKeywords, keywords) => {
    if (keyword && !keywords.find(option => option.toLowerCase().includes(keyword.toLowerCase()))) {
      if (totalKeywords === 7) {
        keywords.pop();
      }
      setKeywords([keyword, ...keywords]);
    }
  };

  return (
    <div className={classes.root}>
      <div style={{ fontSize: 22, fontWeight: 700 }} className={'mb-7'}>
        Search
      </div>

      <SearchBox searchKeyword={searchKeyword} onSearch={onSearchKeyword} onBlur={onSearchBlur} />

      <SearchHistory keywords={keywords} setKeywords={setKeywords} />

      <div className={classes.sectionHeading}>New Requests</div>

      {totalRequests ? (
        <CmtList data={requests} renderRow={(item, index) => <RenderRow key={index} item={item} />} />
      ) : (
        <EmptyResult content="No record found" />
      )}
    </div>
  );
};

const RenderRow = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.requestDetailRoot}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<CmtAvatar className={classes.avatarSize} src={item.user.profile_pic} alt={item.user.name} />}
        title={item.user.name}
        titleProps={{
          variant: 'h4',
          className: classes.titleRoot,
        }}
        subTitle={`@${item.user.username}`}
        subTitleProps={{
          variant: 'body2',
          className: classes.subTitleRoot,
        }}
        actionsComponent={
          <div style={{ display: 'flex' }}>
            <Button size="small" color="primary" variant="contained" style={{ marginRight: 10 }}>
              Accept
            </Button>
            <Button size="small" color="primary">
              Cancel
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default Search;
