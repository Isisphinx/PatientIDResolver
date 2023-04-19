function OnStableStudy(studyId, tags, metadata)
    -- get environment variables port and ip
    local matcherIp = os.getenv('matcherIp')
    local matcherPort = os.getenv('matcherPort')
  
    RequestMatcher(matcherIp, matcherPort, tags, studyId)
  end
  
  -- Request Matcher
  function RequestMatcher(ip, port, tags, studyId)
    local body = DumpJson(tags)
    local headers = {
      ['content-type'] = 'application/json',
    }
  
    local matcherUrl = 'http://' .. ip .. ':' .. port .. '/study/' .. studyId
  
    HttpPost(matcherUrl, body, headers)
  end