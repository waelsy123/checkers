package keeper_test

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/waelsy123/checkers/x/checkers/types"
)

func TestCreateGame(t *testing.T) {
	msgServer, context := setupMsgServer(t)
	createResponse, err := msgServer.CreateGame(context, &types.MsgCreateGame{
		Creator: alice,
		Black:   bob,
		Red:     wael,
	})
	fmt.Println(createResponse)

	require.Nil(t, err)
	require.EqualValues(t, types.MsgCreateGameResponse{
		GameIndex: "", // TODO: update with a proper value when updated
	}, *createResponse)
}
