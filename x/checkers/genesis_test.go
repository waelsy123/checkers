package checkers_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/waelsy123/checkers/testutil/keeper"
	"github.com/waelsy123/checkers/testutil/nullify"
	"github.com/waelsy123/checkers/x/checkers"
	"github.com/waelsy123/checkers/x/checkers/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		SystemInfo: &types.SystemInfo{
			NextId: 58,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CheckersKeeper(t)
	checkers.InitGenesis(ctx, *k, genesisState)
	got := checkers.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.SystemInfo, got.SystemInfo)
	// this line is used by starport scaffolding # genesis/test/assert
}
