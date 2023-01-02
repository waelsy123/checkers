package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/waelsy123/checkers/x/checkers/rules"
	"github.com/waelsy123/checkers/x/checkers/types"
)

func (k msgServer) CreateGame(goCtx context.Context, msg *types.MsgCreateGame) (*types.MsgCreateGameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}

	newIndex := strconv.FormatUint(systemInfo.NextId, 10)

	newGame := rules.New()
	storedGame := types.StoredGame{
		Index: newIndex,
		Board: newGame.String(),
		Turn:  rules.PieceStrings[newGame.Turn],
		Black: msg.Black,
		Red:   msg.Red,
	}

	err := storedGame.Validate()
	if err != nil {
		return nil, err
	}

	systemInfo.NextId++
	k.Keeper.SetSystemInfo(ctx, systemInfo)
	k.Keeper.SetStoredGame(ctx, storedGame)

	_ = ctx

	return &types.MsgCreateGameResponse{GameIndex: newIndex}, nil
}
