export default () => {
    function limitWord(text, limit, moreChar) {
        let limitedText = text.trim().split(' ');

        if (limitedText.length < limit) {
            return text;
        } else {
            limitedText = text.trim().split(' ', limit);
            text        = limitedText.join(' ');

            return text + moreChar;
        }
    }

    return (text, limit, moreChar) => {
        limit    = parseInt(limit) || 10;
        moreChar = moreChar || '...';

        return limitWord(text, limit, moreChar);
    };
};
